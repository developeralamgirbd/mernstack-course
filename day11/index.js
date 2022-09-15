const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    /** Built-in fs Module **/
    if (req.url === '/'){
        /** Asynchronous readFile **/
        // fs.readFile('home.html', (err, data)=>{
        //     res.writeHead(200, {'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        // })

        /** Synchronous readFile **/
        // let homeData = fs.readFileSync('home.html');
        // res.writeHead(200, {'Content-Type':'text/html'});
        // res.write(homeData);
        // res.end();

        /** Asynchronous writeFile **/
        // fs.writeFile('demo.txt', 'Hello World new', (err)=>{
        //     if (err){
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File write fail');
        //         res.end();
        //     }else {
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File write success');
        //         res.end();
        //     }
        // })

        /** Synchronous writeFile **/
        // let err = fs.writeFileSync('demoSync.txt', 'File Write by Synchronous');
        //     if (err){
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File write fail');
        //         res.end();
        //     }else {
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File write success');
        //         res.end();
        //     }

        /** Asynchronous file rename **/
        // fs.rename('test.txt', 'rename.txt', (err)=>{
        //     if (err){
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File rename fail');
        //         res.end();
        //     }else {
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File rename success');
        //         res.end();
        //     }
        // })

        /** Synchronous file rename **/
        if (fs.existsSync('new.txt')){
            fs.renameSync("new.txt","neww.txt");
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('File rename success');
                res.end();
        }else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File rename fail');
            res.end();
        }


        /** Asynchronous file delete **/
        // fs.unlink('demo.txt', (err)=>{
        //      if (err){
        //          res.writeHead(200, {'Content-Type':'text/html'});
        //          res.write('File delete fail');
        //          res.end();
        //      }else {
        //          res.writeHead(200, {'Content-Type':'text/html'});
        //          res.write('File delete success');
        //          res.end();
        //      }
        // });

        /** Synchronous file delete **/
        // let err = fs.unlinkSync('demoSync.txt');
        //  if (err){
        //      res.writeHead(200, {'Content-Type':'text/html'});
        //      res.write('File delete fail');
        //      res.end();
        //  }else {
        //      res.writeHead(200, {'Content-Type':'text/html'});
        //      res.write('File delete success');
        //      res.end();
        //  }

        /** Asynchronous file exits **/
        // fs.exists('test.txt', (result)=>{
        //     if (result){
        //          res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File founded');
        //          res.end();
        //     }else {
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File not found');
        //         res.end();
        //     }
        // });

        /** Synchronous file exits **/
       // let result = fs.existsSync('test.txt');
       //      if (result){
       //           res.writeHead(200, {'Content-Type':'text/html'});
       //          res.write('File founded');
       //           res.end();
       //      }else {
       //          res.writeHead(200, {'Content-Type':'text/html'});
       //          res.write('File not found');
       //          res.end();
       //      }
    }
});

server.listen(8000);
console.log('Server run success');