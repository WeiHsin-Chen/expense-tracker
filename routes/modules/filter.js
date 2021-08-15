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
  const merchant = req.user._id
  const recordPromise = Record.find({ merchant }).lean().sort({ _id: "asc" })
  const categoryPromise = Category.find().lean()
  const filterBy = req.query.filterBy
  const monthFilter = req.query.monthFilter
  Promise.all([recordPromise, categoryPromise])
    .then((models) => {
      const records = models[0]
      const categories = models[1]

      const filteredRecords = records.filter(record => {
        if (filterBy && monthFilter) {
          return record.category === filterBy && record.date.slice(5, 7) === monthFilter
        }
        if (filterBy) {
          return record.category === filterBy
        }
        if (monthFilter) {
          return record.date.slice(5, 7) === monthFilter
        }
        else { return records }
      })
      iconSwitchFunction(records, categories)
      if (filteredRecords) {
        totalAmount = totalAmountFunction(filteredRecords, totalAmount)
      }
      else { totalAmount = totalAmountFunction(records, totalAmount) }
      res.render('index', { records: filteredRecords, filterBy, monthFilter, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router