const http = require('http');
const fs = require('fs');
const port = 8080;
const hostname = '0.0.0.0';
const path = "./index.js";

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.end();
            res.statusCode(404);
        } else {
            res.end(data);
        }
    });
}).listen(8080);

server.listen(port, hostname, () => {
    console.log(`Listening to port ${port}.`)
})
