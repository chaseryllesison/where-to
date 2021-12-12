const express = require('express');
const router = express.Router();
const blogs = require('../controllers/blogs');

router.route('/')
    .get(blogs.blogs);

module.exports = router