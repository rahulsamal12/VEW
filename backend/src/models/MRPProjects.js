const mongoose = require('mongoose');

const MRPProjectSchema = new mongoose.Schema({
  client: { type: String, required: true },
  scope: { type: String, required: true },
  type: { type: String, required: true },
  period: { type: String, required: true },
  process: { type: String, required: true },
  remarks: { type: String, default: '—' },
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 6' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('MRPProject', MRPProjectSchema);
