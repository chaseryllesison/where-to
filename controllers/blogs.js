const Blog = require('../models/blogs');

module.exports.blogs = (req, res) => {
    res.render('blogs/blogs');
}

module.exports.newBlogForm = (req, res) => {
    req.flash('message', 'Welcome to Where-to');
    res.render('blogs/newBlog');
}

module.exports.newBlog = (req, res) => {
    console.log(req.user._id);
    res.send(req.body);
}