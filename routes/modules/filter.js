// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const Record = require('../../models/Record')
const Category = require('../../models/Category')

//引用 tools function
const totalAmountFunction = require('../../tools/totalAmount')

let totalAmount = 0

// route setting for search not yet
router.get('/', (req, res) => {
  const filterBy = req.query.filterBy

  return Record.find()
    .lean()
    .then((records) => {
      const filteredRecords = records.filter(record => {
        return record.category === filterBy
      })
      totalAmount = totalAmountFunction(filteredRecords, totalAmount)
      res.render('index', { records: filteredRecords, filterBy, totalAmount })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router