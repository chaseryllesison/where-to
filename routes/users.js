const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.route('/login')
    .get(users.loginForm);

module.exports = router