// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 models
const Record = require('../../models/Record')
const Category = require('../../models/Category')

// route setting with models seeder connection
router.get('/', (req, res) => {

  Record.find()
    .lean()
    .then(records => {
      let totalAmount = 0

      Category.find()
        .lean()
        .then(categories => {
          records.foreach(record => {
            totalAmount += record.amount
            categories.forEach(category => {
              if (record.category === category.name) {
                record.category = category.icon
              }
            })
          })
          res.render('index', { records, categories, totalAmount })
        })
    })
    .catch(error => console.error(error))
})

router.get('/', (req, res) => {
  res.render('index')
})

// 匯出路由模組
module.exports = router