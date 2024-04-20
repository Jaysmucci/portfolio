const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
// express app
const app = express();

// connect to mongoDB
const mongoUIR  = 'mongodb+srv://<jaysportfolio>:<port1234>@portfolio.l34rgxu.mongodb.net/';
mongoose.connect(mongoUIR)
.then((result) => console.log('conneted successfully')).catch(
    (err) => console.log(err)
);

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000)


// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
})

app.get('/projects', (req, res) => {
    res.render('projects', {title: 'projects'})
})

app.get('/blogs', (req, res) => {
    const blog = [
        // {title:'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        // {title:'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        // {title:'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('blogs', {title: 'blogs', blog})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

app.get('/skills', (req, res) => {
    res.render('skills', {title: 'skills'})
})

app.get('/showcase', (req, res) => {
    res.render('showcase', {title: 'showcase'})
})
app.get('/contact', (req, res) => {
    res.render('contact', {title: 'contact'})
})

app.get('/blogs/create/', (req, res) => {
    res.render('create', {title: 'create'})
})
// 404
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.render('404', {title: '404'})
})