const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Hello World');
});

server.listen(5050);
console.log('Server Run Success');
