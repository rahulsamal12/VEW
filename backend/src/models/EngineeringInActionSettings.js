const mongoose = require('mongoose');

const EngineeringInActionSettingsSchema = new mongoose.Schema({
  heading: { type: String, default: 'Engineering in Action' },
  description: { type: String, default: 'Advanced furnace and metallurgical operations engineered for reliable industrial performance.' },
  enabled: { type: Boolean, default: true },
  updatedAt: { type: Date, default: Date.now }
});

EngineeringInActionSettingsSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('EngineeringInActionSettings', EngineeringInActionSettingsSchema);
