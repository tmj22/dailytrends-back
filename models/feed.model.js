const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeedSchema = new Schema({
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

const feed = mongoose.model('Feed', FeedSchema);
module.exports = {
  feed
};
