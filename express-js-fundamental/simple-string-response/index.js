const express = require('express');
const app = express();

app.get('/one', (req, res)=>{
    res.send('This is simple string response from get method')
})

app.post('/two', (req, res)=>{
    res.send('This is simple string response from post method')
})

app.listen(8000, ()=>{
    console.log('Server run success')
})