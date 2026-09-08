const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  title: { type: String, default: 'About Venkateswar Engg Works Pvt. Ltd.' },
  overview: { type: String },
  foundersVision: { type: String },
  corePillars: [String],
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 1' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', AboutSchema);
