const http  = require('http');
const fs    = require('fs');
const server = http.createServer((req, res)=>{
    if (req.url === '/'){

        page(res,'pages/home.html')

    }else if(req.url === '/sports'){

        page(res,'pages/sports.html')

    }else if(req.url === '/business'){

        page(res,'pages/business.html')

    }else if(req.url === '/lifestyle'){

        page(res,'pages/lifestyle.html')

    }
});


function page(res, path){
    if (fs.existsSync(path)){
        const readPage = fs.readFileSync(path);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(readPage);
        res.end();
    }else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Page Not Found');
        res.end();
    }
}

server.listen(8000);
console.log('Server run success')