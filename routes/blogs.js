const express = require('express');
const router = express.Router();
const blogs = require('../controllers/blogs');
const catchAsync = require('../utils/catchAsync');

router.route('/')
    .get(catchAsync(blogs.blogs));

router.route('/newBlog')
    .get(blogs.newBlogForm)
    .post(catchAsync(blogs.newBlog));

module.exports = router