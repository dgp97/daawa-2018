var http = require('http'),
  fs = require('fs'),
  parser = require('./parser_horas.js'),
  p = parser.parse_horas

http.createServer(function (req, res) {
  fs.readFile('./Vista.html', function (err, html) {
    var html_string = html.toString()

    var respuesta = p(req),
      primerF = respuesta['primerF'],
      segundoF = respuesta['segundoF'],


      html_string = html_string.replace('{primerF}', primerF)
    html_string = html_string.replace('{segundoF}', segundoF)
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(html_string)
    res.end()
  })
}).listen(8080); 