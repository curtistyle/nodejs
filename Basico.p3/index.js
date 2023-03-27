const http = require('http');
const colors = require('colors');

/*
http.createServer(function (req, res){
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}).listen(3000);
*/

// --------------------------------------------------

// handleserber : manejador del servidor
const handleServer = function (req, res){
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

//http.createServer(handleServer).listen(3000);

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('server on!'.green);
});

