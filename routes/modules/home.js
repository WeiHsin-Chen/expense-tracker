// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 models
const Record = require('../../models/Record')
const Category = require('../../models/Category')

//引用 tools function
const totalAmountFunction = require('../../tools/totalAmount')
const iconSwitchFunction = require('../../tools/iconSwitch')

let totalAmount = 0

// route setting with models seeder connection
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      Category.find()
        .lean()
        .then(categories => {
          const iconSwitch1 = iconSwitchFunction(records, categories)
          const totalAmount1 = totalAmountFunction(records, totalAmount)
          Promise.all([iconSwitch1, totalAmount1])
          res.render('index', { records, totalAmount1 })
        })
    })
    .catch(error => console.error(error))
})


// 匯出路由模組
module.exports = router