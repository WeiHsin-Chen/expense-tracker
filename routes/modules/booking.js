// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// // 引用 Todo model
// const restaurant = require('../../models/restaurant')

// route setting for create new expense booking
router.get('/new', (req, res) => {
  return res.render('new')
})

// route setting for create new expense booking
router.get('/edit', (req, res) => {
  return res.render('edit')
})

// 匯出路由器
module.exports = router