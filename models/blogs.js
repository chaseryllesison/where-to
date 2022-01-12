const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Blog', BlogSchema);