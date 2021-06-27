// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const Record = require('../../models/Record')
const Category = require('../../models/Category')

//引用 tools function
const totalAmountFunction = require('../../tools/totalAmount')
const iconSwitchFunction = require('../../tools/iconSwitch')

let totalAmount = 0

// route setting for search not yet
router.get('/', (req, res) => {
  const recordPromise = Record.find().lean().sort({ _id: "asc" })
  const categoryPromise = Category.find().lean()
  const filterBy = req.query.filterBy
  Promise.all([recordPromise, categoryPromise])
    .then((models) => {
      const records = models[0]
      const categories = models[1]
      const filteredRecords = records.filter(record => {
        return record.category === filterBy
      })
      iconSwitchFunction(records, categories)
      totalAmount = totalAmountFunction(records, totalAmount)
      res.render('index', { records: filteredRecords, filterBy, totalAmount })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router