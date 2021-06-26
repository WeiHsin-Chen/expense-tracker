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
  const recordPromise = Record.find().lean().sort({ _id: "asc" })
  const categoryPromise = Category.find().lean()
  Promise.all([recordPromise, categoryPromise])
    // .then((values) => {
    //   async (values) => {
    //     const records = values[0]
    //     const categories = values[1]
    //     console.log(categories)
    //     // await iconSwitchFunction(records, categories)
    //     // totalAmount = await totalAmountFunction(records, totalAmount)
    //     res.render('index', { records, totalAmount })
    //   }
    // })



    .then((models) => {
      const records = models[0]
      const categories = models[1]
      Promise.all([iconSwitchFunction, totalAmountFunction])
        .then(() => {
          iconSwitchFunction(records, categories)
          totalAmount = totalAmountFunction(records, totalAmount)
        })
      // iconSwitchFunction(records, categories)
      // totalAmount = totalAmountFunction(records, totalAmount)
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.error(error))
})


// 匯出路由模組
module.exports = router