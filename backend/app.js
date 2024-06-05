
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use( '/public', express.static('static'));

app.set('views','../frontend');
app.set('view engine','ejs');


app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/apropos', (req, res) => {
    res.render('apropos');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/singup', (req, res) => {
    res.render('singup');
})
app.get('/gpstrack', (req, res) => {
    res.render('gpstrack');
})
app.get('/users', (req, res) => {
    res.render('users');
})

module.exports = app;
