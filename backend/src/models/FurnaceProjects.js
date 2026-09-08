const mongoose = require('mongoose');

const FurnaceProjectSchema = new mongoose.Schema({
  client: { type: String, required: true },
  furCapacity: { type: String, required: true },
  type: { type: String, required: true, default: 'O&M' },
  period: { type: String, required: true },
  process: { type: String, required: true },
  remarks: { type: String, default: '—' },
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 5' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('FurnaceProject', FurnaceProjectSchema);
