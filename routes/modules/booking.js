// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const Record = require('../../models/Record')

// route setting for create view
router.get('/new', (req, res) => {
  return res.render('new')
})

// route setting for new expense booking creating
router.post('/', (req, res) => {
  const name = req.body.name
  const category = req.body.category
  const date = req.body.date
  const amount = req.body.amount
  return Record.create({ name, category, date, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// route setting for create new expense booking
router.get('/edit', (req, res) => {
  return res.render('edit')
})

// 匯出路由器
module.exports = router