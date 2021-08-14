// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const booking = require('./modules/booking')
const filter = require('./modules/filter')
const users = require('./modules/users')
const home = require('./modules/home')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')

router.use('/booking', authenticator, booking)
router.use('/filter', authenticator, filter)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router