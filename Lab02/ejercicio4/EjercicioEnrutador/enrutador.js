var http = require('http');
var url = require('url');
var fs = require('fs');
var tipos = {
    'js': 'text/javascript',
    'html': 'text/html',
};
http.createServer(function(solicitud, respuesta) {
    var url = (url.parse(solicitud.url).pathname == '/') ? './diana.html' : url.parse(solicitud.url).pathname;
    var ruta = '.' + url;
    fs.exists(ruta, function(existe) {
        if (existe) {
            fs.readFile(ruta, function(error, contenido_archivo) {
                if (error) {
                    respuesta.writeHead(500, 'text/plain');
                    respuesta.end('Error interno.');
                } else {
                    var extension = ruta.split('.').pop();
                    var mime_type = tipos[extension];
                    respuesta.writeHead(200, {'Content-Type': mime_type});
                    respuesta.end(contenido_archivo);
                }
            });
        } else {
            respuesta.end('Error');
        }
    });
}).listen(8080);