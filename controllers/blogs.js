const Blog = require('../models/blogs');


module.exports.blogs = async (req, res) => {
    const blogs = await Blog.find({}).populate('author');
    res.render('blogs/blogs', {blogs});
}

module.exports.newBlogForm = (req, res) => {
    req.flash('message', 'Welcome to Where-to');
    res.render('blogs/newBlog');
}

module.exports.newBlog = async (req, res) => {
    const { title, placeName, address, blogContent } = req.body;
    const geometry = JSON.parse(req.body.geometry);
    const blog = new Blog({ title, placeName, address, geometry, blogContent });
    blog.author = req.user._id;
    await blog.save();
    // console.log(blog);
    res.send(blog);
}