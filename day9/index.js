const index = require('day9/index');

const server = index.createServer((req, res)=>{
   if(req.url === '/'){
       res.writeHead(200, {'Content-Type': 'text/html'})
       res.write('<h1>Home Page</h1>');
       res.end()
   }else if(req.url === '/about'){
       res.writeHead(200, {'Content-Type': 'text/html'})
       res.write('<h1>About Page</h1>');
       res.end()
   }else if(req.url === '/contact'){
       res.writeHead(200, {'Content-Type': 'text/html'})
       res.write('<h1>Contact Page</h1>');
       res.end()
   }
});

server.listen(5050);
console.log('Server Run Success');


