const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const User = require('./models/user');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// connect db
mongoose.connect('mongodb://localhost:27017/where-to');

// body parser
// use body parser to easy fetch post body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//method override
app.use(methodOverride('_method'));

//for routs
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');

//routs
app.use('/', userRoutes);
app.use('/blogs', blogRoutes);

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`serving on port ${port}`);
})

//parses res.body
app.use(express.urlencoded({ extended: true }));

// setting public directory
app.use(express.static(__dirname + '/public'));

//setting view engines
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//for method override
// app.use(methodOverride('_method'));



app.get('/', (req, res) => {
    res.render('landingPage');
});

//404 route
app.use((req, res) => {
    res.send("NOT FOUND!");
})