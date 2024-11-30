const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
});

module.exports = mongoose.model('Comment', commentSchema);