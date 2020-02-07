const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  imageUrls: [],
});

const Images = mongoose.model('Image', restaurantSchema);

module.exports = Images;
