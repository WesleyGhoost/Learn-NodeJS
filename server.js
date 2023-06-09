const http = require('http')

const port = 4000

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end("Hello Neighbor")

    

}).listen(port, () => console.log('Yes!'))