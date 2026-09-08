const mongoose = require('mongoose');

const KPISchema = new mongoose.Schema({
  title: { type: String, default: 'KPI Si.Mn based on local ores of both Comilog & NGM' },
  dayPowerProductionCalculation: {
    formulaPower: { type: String, default: '22.5 x .78 PF x .97 LF = 17 MWH x 24 hrs = 408 MWH/day' },
    formulaProduction: { type: String, default: 'Specific Power @ 3.8 = 107 MT x 2 Furnace = 214 MT/day' }
  },
  grades: [{
    gradeName: String,
    mnFeRatio: String,
    carbonInput: String, // Preserve "370-380 ma x"
    avgMnInput: String,
    basicity: String,
    mnO: String
  }],
  sourceRef: { type: String, default: 'Source: Operational SOP — Page 9-10' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('KPI', KPISchema);
