const mongoose = require('mongoose');

const InternationalProjectSchema = new mongoose.Schema({
  client: { type: String, required: true },
  location: { type: String, required: true },
  scope: { type: String, required: true },
  year: { type: String, required: true },
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 8' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('InternationalProject', InternationalProjectSchema);
