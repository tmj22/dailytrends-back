const mongoose = require('mongoose');

const FeedSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

const Feed = module.exports = mongoose.model('feed', FeedSchema);
module.exports.get = function (callback, limit) {
    Feed.find(callback).limit(limit);
}