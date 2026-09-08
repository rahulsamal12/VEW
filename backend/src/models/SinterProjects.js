const mongoose = require('mongoose');

const SinterProjectSchema = new mongoose.Schema({
  client: { type: String, required: true },
  capacity: { type: String, required: true },
  type: { type: String, required: true, default: 'Turnkey' },
  period: { type: String, required: true },
  process: { type: String, required: true },
  remarks: { type: String, default: '—' },
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 7' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('SinterProject', SinterProjectSchema);
