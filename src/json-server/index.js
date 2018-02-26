const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let shoppingsArr = []

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

app.get('/', (req, res) => res.send('shoppings List Server is ON!'))

app.get('/shoppings', (req, res) => res.send(shoppingsArr))

app.post('/shoppings', (req, res) => {
  let newItem = req.body
  shoppingsArr.push(newItem)
  res.send(shoppingsArr)
})

app.put('/shoppings', (req, res) => {
  let item = req.body
  shoppingsArr = upadteArrById(shoppingsArr, item)
  res.send(shoppingsArr)
})

app.delete('/shoppings', (req, res) => {
  let item = req.body.shopping
  let index = getIndexArrById(shoppingsArr, item)
  shoppingsArr.splice(index, 1)
  res.send(shoppingsArr)
})

function upadteArrById (arr, item) {
  let retArr = [...arr]
  for (let i = 0; i < retArr.length; i++) {
    if (retArr[i].id === item.id) {
      retArr[i] = item
      return retArr
    }
  }
  return retArr
}

function getIndexArrById (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === item.id) {
      return i
    }
  }
  return -1
}
app.listen(3000, () => console.log('Example app listening on port 3000!'))
