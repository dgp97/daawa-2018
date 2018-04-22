var express = require('express')
var app = express()
var path = require('path')
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
// __dirname : It will resolve to your project folder.
})
app.post('/', function (req, res) {
  res.send('Llamada POST misma url')
})
app.put('/user', function (req, res) {
  res.send('Recibimos un PUT en /user')
})
app.delete('/user', function (req, res) {
  res.send('Recibimos un Delete en /user')
})
app.use(function (err, req, res, next) {
  console.error(error.stack)
  res.status(500).send('Algo salio mal Diana.')
})
app.use(function (req, res, next) {
  res.status(404).send('Eso no existe Diana.')
})
app.listen(3000, function () {
  console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})