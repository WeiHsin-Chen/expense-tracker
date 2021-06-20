const Record = require('../Record')  //載入Record model
const recordData = require('../seeds/recordSeeds.json')
const db = require('../../config/mongoose')

db.once('open', () => {              // 連線成功
  Record.create(
    recordData.recordSeeds
  ).then(() => {
    console.log('insert Record done...')
    return db.close()
  }).then(() => {
    console.log('database connection closed...')
  })
})