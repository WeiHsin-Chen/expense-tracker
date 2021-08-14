// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const booking = require('./modules/booking')
const filter = require('./modules/filter')
const users = require('./modules/users')
const home = require('./modules/home')

router.use('/booking', booking)
router.use('/filter', filter)
router.use('/users', users)
router.use('/', home)

// 匯出路由器
module.exports = router