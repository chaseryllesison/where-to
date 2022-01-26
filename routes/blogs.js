const express = require('express');
const router = express.Router();
const blogs = require('../controllers/blogs');
const catchAsync = require('../utils/catchAsync');
const multer  = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(catchAsync(blogs.blogs));

router.route('/newBlog')
    .get(blogs.newBlogForm)
    .post(upload.array('images'), catchAsync(blogs.newBlog));

router.route('/:id')
    .get(blogs.showBlog);

module.exports = router