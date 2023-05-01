const http = require('http')

const server = http.createServer();

const headers = {
    'Content-type': 'application/json',
}

// In-memory DB
const dbData = {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

server.on('request', (req, res) => {
    if (req.url == '/age-counting') {
        res.writeHead(200, headers)
        res.end(JSON.stringify(dbData))
    }

    res.writeHead(404, headers)
    res.end() 
})

server.listen(8080, () => console.log('Server listening on 8080'));
