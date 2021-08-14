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
  const merchant = req.user._id
  const { name, category, date, amount } = req.body
  return Record.create({ name, category, date, amount, merchant })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// route setting for editing booking view
router.get('/:id/edit', (req, res) => {
  const merchant = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, merchant })
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const merchant = req.user._id
  const _id = req.params.id
  const { name, category, date, amount } = req.body
  return Record.findOne({ _id, merchant })
    .then(record => {
      record.name = name
      record.category = category
      record.date = date
      record.amount = amount
      record.merchant = merchant
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const merchant = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, merchant })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 匯出路由器
module.exports = router