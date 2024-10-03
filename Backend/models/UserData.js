const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('UserData', UserDataSchema);