const express = require('express');
const passport = require('passport');
const router = express.Router();
const users = require('../controllers/users');
// const catchAsync = require('../utils/catch-async');

router.route('/login')
    .get(users.loginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login);

router.route('/register')
    .get(users.registrationForm)
    .post(users.registerUser);

module.exports = router;