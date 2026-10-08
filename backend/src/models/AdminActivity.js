const mongoose = require('mongoose');

const AdminActivitySchema = new mongoose.Schema({
  action: { type: String, required: true },
  module: { type: String, required: true },
  details: { type: String },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdminActivity', AdminActivitySchema);
