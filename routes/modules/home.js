// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const Record = require('../../models/Record')

// route setting with models seeder connection
router.get('/', (req, res) => {
  const sortBy = req.query.sortBy || '_id'

  Record.find()
    .lean()
    .sort(sortBy)
    .then(records => res.render('index', { records, sortBy }))
    .catch(error => console.error(error))
})

router.get('/', (req, res) => {
  res.render('index')
})

// 匯出路由模組
module.exports = router