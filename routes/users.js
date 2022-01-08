const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
// const catchAsync = require('../utils/catch-async');

router.route('/login')
    .get(users.loginForm);

router.route('/register')
    .get(users.registrationForm)
    .post(users.registerUser);

module.exports = router