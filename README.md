# AC 學期 3全 ｜ A2 老爸的私房錢升級

利用 Node.js 和 Express 打造一個簡單的餐廳清單網頁。

## 安裝套件

- Node.js: 10.24.1
- Express: 4.17.1
- Express-session: 1.17.2
- Bcryptjs: 2.4.3
- Passport: 0.4.1
- Passport-facebook: 3.0.0
- Passport-local: 1.0.0
- Dotenv: 10.0.0
- Connect-flash: 0.1.1
- Express-Handlebars: 5.3.2
- body-parser: 1.19.0
- mongoose: 5.12.14
- handlebars-helpers: 0.10.0
- method-override: 3.0.0
    
    
## 基本功能

(1)在首頁一次瀏覽所有支出的清單
(2)在首頁看到所有支出清單的總金額
(3)新增一筆支出
(4)編輯支出的所有屬性 (一次只能編輯一筆)
(5)刪除任何一筆支出 (一次只能刪除一筆)
(6)在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和
(7)加入使用者認證功能
(8)除了現在的資料，使用者可以在每筆支出加上「商家 (merchant)」這個欄位
(9)在首頁，使用者可以同時根據「類別」與「月份」來篩選支出；總金額的計算只會包括被篩選出來的支出總和

## Getting Started
Clone respository to your local computer
```
$ git clone https://github.com/WeiHsin-Chen/expense-tracker.git
```
Install by npm
```
$ npm install
```
Execute
```
$ npm run dev
```
Terminal show the message
```
Express is running on localhost:3000
```
Now you can browse the website on
```
http://localhost:3000
```
Update the models seeder
```
$ npm run seed
```