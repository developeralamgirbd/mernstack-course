const http = require('http');
const URL = require('url');

const server = http.createServer((req, res)=>{
   res.end('Hello World')
});

server.listen(8000);
console.log('Server Run Success');


