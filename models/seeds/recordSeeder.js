const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Record = require('../Record')
const User = require('../user')
const recordData = require('../seeds/recordSeeds.json')
const db = require('../../config/mongoose')

const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const merchant = user._id
      return Promise.all(Array.from(
        { length: recordData.recordSeeds.length },
        (_, i) => Record.create({ ...recordData.recordSeeds[i], merchant })
      ))
        .then(() => {
          console.log('insert Record done...')
          return db.close()
        }).then(() => {
          console.log('database connection closed...')
        })
    })
})