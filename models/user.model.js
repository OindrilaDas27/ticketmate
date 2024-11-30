const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
});

module.exports = mongoose.model('User', userSchema);