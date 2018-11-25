const mongoose = require('mongoose');

// Hologram model
let Hologram = mongoose.model('Hologram', {
  firstname: String,
  lastname: String,
  imageUrl: String,
  thumbUrl: String,
  price: Number
});

module.exports = Hologram;