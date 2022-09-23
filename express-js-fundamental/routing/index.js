const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.end('Home page')
})

app.get('/about', (req, res)=>{
    res.end('About page')
})

app.get('/contact', (req, res)=>{
    res.end('Contact page')
})

app.post('/store', (req, res)=>{
    res.end('Store Data')
})

app.put('/put', (req, res)=>{
    res.end('update Data')
})

app.delete('/delete', (req, res)=>{
    res.end('delete Data')
})

app.listen(8000, ()=>{
    console.log('Server run success')
})