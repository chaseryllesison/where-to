const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.route('/login')
    .get(users.loginForm);

router.route('/register')
    .get(users.registrationForm);

module.exports = router