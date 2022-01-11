module.exports.blogs = (req, res) => {
    res.render('blogs/blogs');
}

module.exports.newBlog = (req, res) => {
    req.flash('message', 'Welcome to Where-to');
    res.render('blogs/newBlog');
}