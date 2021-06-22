// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const Record = require('../../models/Record')
const Category = require('../../models/Category')

// route setting for search not yet
router.get('/', (req, res) => {
  const categoryFilter = req.query.categoryFilter

  res.render('index')
    .then(console.log(categoryFilter))

})

// 匯出路由模組
module.exports = router