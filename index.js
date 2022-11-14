const http = require('http');
const fs = require('fs');

const port = 8080;
const hostname = '0.0.0.0';
const root = "./web";

const server = http.createServer((req, res) => {
    if (!req.url.startsWith("/")) return;

    res.setHeader('Content-Type', 'text/html');

    var path = req.url == "/" ? "/index.html" : req.url;

    fs.readFile(root + path, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    });

});

server.listen(port, hostname, () => {
    console.log(`Listening to port ${port}.`)
})
