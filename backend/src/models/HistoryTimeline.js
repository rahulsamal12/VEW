const mongoose = require('mongoose');

const HistoryTimelineSchema = new mongoose.Schema({
  year: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  contracts: [String],
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 2' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('HistoryTimeline', HistoryTimelineSchema);
