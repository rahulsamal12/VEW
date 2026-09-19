const mongoose = require('mongoose');

const RawMaterialSchema = new mongoose.Schema({
  operatingConditions: {
    load: { type: String, default: '22.5 MVA' },
    pf: { type: String, default: '.78' },
    lf: { type: String, default: '.95' },
    specificPower: { type: String, default: '3.6 to 3.9 excluding Auxiliary' },
    productionPerDayPerFurnace: { type: String, default: '105 to 110 MT / Day / Furnace' },
    totalProduction: { type: String, default: '6000 to 6500 MT' }
  },
  materials: [{
    material: String,
    consumptionPerMT: String,
    monthlyRequirement: String,
    size: String,
    specifications: String
  }],
  note: { type: String, default: '3-5% may vary according to grade and in-built standard Moisture, size etc.' },
  sourceExcelNote: { type: String, default: 'ATTACHED EXCEL SHEET OF CHARGE MIX FOR YOUR BETTER UNDERSTANDING' },
  storageShedRequirement: {
    description: String,
    dimensions: String,
    centerHeight: String,
    bothSidesHeight: String,
    type: { type: String }
  },
  sourceRef: { type: String, default: 'Source: Operational SOP — Page 2' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RawMaterial', RawMaterialSchema);
