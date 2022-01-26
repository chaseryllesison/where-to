const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true }};

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

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
    images: [ImageSchema],
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
    },
    datePosted: {
        type: Date
    }
});

module.exports = mongoose.model('Blog', BlogSchema);