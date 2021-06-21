const Category = require('../Category')  //載入Record model
const categoryData = require('../seeds/recordSeeds.json')
const db = require('../../config/mongoose')

db.once('open', () => {              // 連線成功
  Category.create(
    categoryData.categorySeeds
  ).then(() => {
    console.log('insert Category done...')
    return db.close()
  }).then(() => {
    console.log('database connection closed...')
  })
})