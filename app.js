const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connection string
const url = 'mongodb+srv://user-name:<password>@cluster0.j7uqi.mongodb.net/nodejstutorial?retryWrites=true&w=majority';
mongoose.connect(url)
    .then((result) => { console.log('connected to db'); app.listen(3000); })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// middlewares and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // res.render('index', { title: 'homepage', blogs });

    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    //res.send('<p>About page</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', {title: 'About'});
});

//blog Routes
app.use('/blogs', blogRoutes);

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', {title: '404'});
});
