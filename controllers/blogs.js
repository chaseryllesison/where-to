require('dotenv').config();
const Blog = require('../models/blogs');

// cloudinary.uploader
//     .upload('./Campground.jpeg', {
//         resource_type: 'image',
//     })
//     .then((result) => {
//         console.log("Success", JSON.stringify(result, null, 2));
//     })
//     .catch((error) => {
//         console.log("Error", JSON.stringify(result, null, 2));
//     })

module.exports.blogs = async (req, res) => {
    const blogs = await Blog.find({}).populate('author');
    res.render('blogs/blogs', {blogs});
}

module.exports.newBlogForm = (req, res) => {
    req.flash('message', 'Welcome to Where-to');
    res.render('blogs/newBlog');
}

module.exports.newBlog = async (req, res) => {
    try {
        const { title, placeName, address, blogContent } = req.body;
        const geometry = JSON.parse(req.body.geometry);
        const blog = new Blog({ title, placeName, address, geometry, blogContent });
        blog.author = req.user._id;
        blog.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
        blog.datePosted = new Date();
        await blog.save();
        req.flash('success', 'Successfully posted!');
        res.redirect('/blogs');
    }catch(e){
        console.log('error', e);
    }
}

module.exports.showBlog = async(req, res) => {
    const blog = await Blog.findById(req.params.id).populate('author');
    if(!blog){
        req.flash('error', 'Cannot find post');
        res.redirect('/blogs')
    }
    res.render('blogs/showBlog', {blog});
}