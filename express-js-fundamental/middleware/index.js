const express = require('express');

const app = express();

/**
 * Application Level Middleware
 */
/*
app.use((req, res, next)=>{
    console.log('Application level middleware');
    next()
})
*/

/**
 * Route middleware
 */

app.use('/service', (req, res, next)=>{
    console.log('Service route middleware');
next();
})

app.get('/', (req, res)=>{
    res.send('Home page').end();
})

app.get('/about', (req, res)=>{
    res.send('About page').end();
})
app.get('/contact', (req, res)=>{
    res.send('Contact page').end();
})

app.get('/service', (req, res)=>{
    res.send('Service page').end();
})


app.listen(8000, ()=>{
    console.log('Server run success. port is 8000');
});