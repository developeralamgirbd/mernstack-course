const http = require('http');
const URL = require('url');

const server = http.createServer((req, res)=>{
   // if(req.url === '/'){
   //     res.writeHead(200, {'Content-Type': 'text/html'})
   //     res.write('<h1>Home Page</h1>');
   //     res.end()
   // }else if(req.url === '/about'){
   //     res.writeHead(200, {'Content-Type': 'text/html'})
   //     res.write('<h1>About Page</h1>');
   //     res.end()
   // }else if(req.url === '/contact'){
   //     res.writeHead(200, {'Content-Type': 'text/html'})
   //     res.write('<h1>Contact Page</h1>');
   //     res.end()
   // }

    /** Built-in URL Module **/
    // const myUrl = 'http://alamgir.com/blog.html?year=2000&month=july&day=15';
    //
    // let myUrlObj = URL.parse(myUrl, true);
    //
    // let hostName = myUrlObj.host;
    // let pathName = myUrlObj.pathname;
    // let searchName = myUrlObj.search;
    //
    // res.writeHead(200, {'Content-type': 'text/html'});
    // res.write(hostName); //alamgir.com
    // res.write(pathName); // blog.html
    // res.write(searchName); // ?year=2000&month=july&day=15
    // res.end()

    /** Built-in fs Module **/

});

server.listen(5050);
console.log('Server Run Success');


