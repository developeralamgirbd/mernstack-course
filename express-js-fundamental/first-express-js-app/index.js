const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.end('Welcome to express js')
})

app.listen(8000, ()=>{
    console.log('Server run success')
})