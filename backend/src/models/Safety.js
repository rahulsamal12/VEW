const mongoose = require('mongoose');

const SafetySchema = new mongoose.Schema({
  title: { type: String, default: 'Safety & Environmental Standards' },
  permits: [String],
  ppeRequirements: [String],
  recordsAndLogbooks: [String],
  environmentalControls: [String],
  sourceRef: { type: String, default: 'Source: Operational SOP — Page 8' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Safety', SafetySchema);
