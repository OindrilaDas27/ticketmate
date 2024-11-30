const mongoose = require('mongoose');
const { Schema } = mongoose;

const venueSchema = new Schema({
    venueName: {
        type: String,
        required: true,
    },
    addressLink: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Venue', venueSchema);