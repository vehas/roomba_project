var express = require('express')
var bodyParser = require('body-parser')
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var PORT = 3000
var db = { info : "init server"}
app.get('/', function (req, res) {
  res.send(db)
})

app.post('/', function (req, res) {
  console.log(req.body)
  Object.assign(db, req.body)
  res.send('Hello :' + JSON.stringify(db) )
})

app.listen(PORT, function () {
  console.log(' app listening on port :' + PORT)
})
