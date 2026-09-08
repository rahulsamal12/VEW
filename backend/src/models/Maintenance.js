const mongoose = require('mongoose');

const MaintenanceSchema = new mongoose.Schema({
  mechanical: {
    rawMaterial: [String],
    furnace: [String],
    casting: [String],
    metalBreaking: [String],
    packing: [String],
    plantWidePreventive: [String],
    plantWideBreakdown: [String],
    shutdown: [String],
    fabricationWorkshop: [String]
  },
  electrical: {
    rawMaterial: [String],
    furnace: [String],
    casting: [String],
    metalBreaking: [String],
    packing: [String],
    plantWidePreventive: [String],
    plantWideBreakdown: [String],
    conditionMonitoring: [String],
    automation: [String]
  },
  sourceRef: { type: String, default: 'Source: Operational SOP — Pages 4-7' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);
