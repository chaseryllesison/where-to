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
    placeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    geometry: {
        type: {
            coordinates: {
                type: [Number],
                required: true
            },
            type: String,
            enum: ['Point'],
            required: true
        },
    },
    blogContent: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Blog', BlogSchema);