// include packages and define server related variables
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const mongoose = require('mongoose') // 載入 mongoose
const db = mongoose.connection       // 取得資料庫連線狀態

const routes = require('./routes')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files for css
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

// setting mongoose
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

db.on('error', () => {               // 連線異常
  console.log('mongodb error!')
})
db.once('open', () => {              // 連線成功
  console.log('mongodb connected!')
})

// 引用 routes
app.use(routes)

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
