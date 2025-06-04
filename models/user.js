const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    empID: String,
    userID: String,
    role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user' // default role is 'user'
  }
});

module.exports = mongoose.model('User', userSchema);
