const Blog = require('../models/blogs');

module.exports.blogs = async (req, res) => {
    const blogs = await Blog.find({});
    res.render('blogs/blogs', {blogs});
}

module.exports.newBlogForm = (req, res) => {
    req.flash('message', 'Welcome to Where-to');
    res.render('blogs/newBlog');
}

module.exports.newBlog = async (req, res) => {
    const { title, blogContent } = req.body;
    const blog = new Blog({ title, blogContent});
    blog.author = req.user._id;
    await blog.save();
    console.log(blog);
    res.send(blog);
}