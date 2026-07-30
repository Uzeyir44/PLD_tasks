const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('BiletAZ API işləyir!');
});

server.listen(1245);