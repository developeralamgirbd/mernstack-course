const http = require('http');
const URL = require('url');
const server = http.createServer((req, res)=>{
    // if (req.url === '/'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('Home Page');
    //     res.end();
    // }else if(req.url === '/about'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('About Page');
    //     res.end();
    // }else if(req.url === '/contact'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('Contact Page');
    //     res.end();
    // }

   /** Built-in URL Module **/
   const myUrl = 'http://alamgir.com/blog.html?year=2000&month=july&day=15';
   const myUrlObj = URL.parse(myUrl);
   const hostName = myUrlObj.hostname;
   const pathName = myUrlObj.pathname;
   const searchQ = myUrlObj.search;

   res.writeHead(200, {'Content-Type': 'text/html'});
   // res.write(hostName); // alamgir.com
   // res.write(pathName); // blog.html
   res.write(searchQ); // ?year=2000&month=july&day=15
   res.end();
})

server.listen(5000);
console.log('Server Successfully Run')