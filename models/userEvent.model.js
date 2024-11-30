const mongoose = require('mongoose');
const { Schema } = mongoose;

const userEventSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
});

module.exports = mongoose.model('UserEvent', userEventSchema);