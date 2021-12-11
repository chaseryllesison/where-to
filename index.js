const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

//for routs
const userRoutes = require('./routes/users');

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


//routs
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.render('landingPage');
});

//404 route
app.use((req, res) => {
    res.send("NOT FOUND!");
})