var express = require('express')
var app = express()

app.get('/', function (req, res){
res.send('hello world! this is my first basic server.' )
})

app.listen(9886)
