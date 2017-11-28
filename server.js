const http = require('http')
const fs = require('fs')
path = require('path')
http.createServer((request, response) => {

    if (request.url === '/' || request.url === '') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        return response.end(fs.readFileSync('./views/index.html'))
    }

    const url = request.url.replace('/', '')
    console.log('url', url)
    fs.readFile('./views/'+url + '.html', (err, file) => {
       
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            return response.end(fs.readFileSync('./views/404.html'))
        }

        response.writeHead(200, { 'Content-Type': 'text/html' })
        return response.end(file)

    })
})
    .listen(3000)
console.log('Server running at http://localhost:3000/')