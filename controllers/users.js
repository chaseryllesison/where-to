const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');

module.exports.loginForm = (req,res) => {
    res.render('users/login');
}

module.exports.registrationForm = (req, res) => {
    res.render('users/register');
}

module.exports.registerUser = async (req, res) => {
    try {
        const { email, username, firstName, lastName, password } = req.body;
        const user = new User({ email, username, firstName, lastName});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err);
            req.flash('success', 'Welcome to Yelp Camp!');
            res.redirect('/blogs');
        })
    
    }catch(e){
        console.log('error', e);
    }
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back to Where-to!');
    const redirectURL = req.session.returnTo || '/blogs';
    delete req.session.returnTo;
    res.redirect(redirectURL);
}
// const sampleUser = new User({ username: 'sampleUser2', email: 'sample@email.com', firstName: 'sam', lastName: 'samplee'});
// sampleUser.save();

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}