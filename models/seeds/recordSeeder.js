const Record = require('../Record')  //載入Record model
const recordData = require('../seeds/recordSeeds.json') //載入restaurant資料
const db = require('../../config/mongoose')

db.once('open', () => {              // 連線成功
  Record.create(
    recordData.recordSeeds
  )
  console.log('recordData Created!')
})