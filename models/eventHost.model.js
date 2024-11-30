const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventHostSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('EventHost', eventHostSchema);