const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    /** Built-in fs Module **/
    if (req.url === '/'){
        // Asy
        fs.readFile('home.html', (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
});

server.listen(8000);
console.log('Server run success');