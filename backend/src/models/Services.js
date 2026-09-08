const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  capacity: { type: String },
  overview: { type: String, required: true },
  highlights: [String],
  productsOrScope: [String],
  fabricationInfo: { type: String },
  sourceRef: { type: String, required: true },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Service', ServiceSchema);
