const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        require: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue'
    },
    price: {
        type: Number,
        require: true
    },
    eventHost: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventHost'
    }],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    dateTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Event', eventSchema);