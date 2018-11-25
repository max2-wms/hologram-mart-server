const mongoose = require('mongoose');

// User model
let User = mongoose.model('User', {
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  role: String
});

module.exports = User;