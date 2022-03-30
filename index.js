const http = require('http');
const fs = require('fs');

const PORT = 9001;


const server = http.createServer((req, res) => {
    const path = (req.url === "/") ? "/html/about.html" : req.url
    console.log(req.url);
    fs.readFile("." + path, (err, data) => {
        if (err) {
            res.write("Error: File not found")
        } else {
            res.write(data)
        }
        res.end();
    });
});

server.listen(PORT);

console.log("server listing to port ", PORT)