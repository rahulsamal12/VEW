const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fullName: { type: String },
  category: { type: String, default: 'Major Client' },
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 4' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Client', ClientSchema);
