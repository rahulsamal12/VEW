const mongoose = require('mongoose');

const OperationsSchema = new mongoose.Schema({
  heading: { type: String, default: 'NGM Smelters' },
  furnaceSpec: { type: String, default: '22.5 MVA x 2 Nos' },
  location: { type: String, default: 'Monda' },
  title: { type: String, default: 'Operational SOP' },
  scopeMatrix: { type: String, default: 'Scope matrix FAP' },
  scopeOverview: { type: String, default: 'Raw Material receiving → Smelting → Metal breaking & Dispatch' },
  scopeDetails: [String],
  steps: [{
    stepNumber: Number,
    name: String,
    overview: String,
    details: [String],
    sourceNote: String
  }],
  slagGranulationNote: { type: String },
  metalRecoveryNote: { type: String },
  sourceRef: { type: String, default: 'Source: Operational SOP — Pages 1-8' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Operations', OperationsSchema);
