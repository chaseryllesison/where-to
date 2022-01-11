const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const User = require('./models/user');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// connect db
mongoose.connect('mongodb://localhost:27017/where-to');

// body parser
// use body parser to easy fetch post body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sessions
const sessionConfig = {
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}
app.use(session(sessionConfig));
app.use(flash());

//middleware to access success so we don't have to pass flash to our tamplates because we allways have access to it
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

//for passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//method override
app.use(methodOverride('_method'));

//for routs
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');
const { allowedNodeEnvironmentFlags } = require('process');

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