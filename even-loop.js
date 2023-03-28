const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Bienvenidos al servidor');
        return res.end();
    }

    if (req.url === '/about') {
        // codigo bloqueante
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i);
        }

        return res.end('About page');
    }

    res.end('not found');
})

server.listen(3000);

console.log('Server en el puerto 3000, on!.');