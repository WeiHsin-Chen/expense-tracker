if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Category = require('../Category')
const categoryData = require('../seeds/recordSeeds.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  return Promise.all(Array.from(
    { length: categoryData.categorySeeds.length },
    (_, i) => Category.create({ ...categoryData.categorySeeds[i] })
  ))
    .then(() => {
      console.log('insert Category done...')
      return db.close()
    }).then(() => {
      console.log('database connection closed...')
    })
})