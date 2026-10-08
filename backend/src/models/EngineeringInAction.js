const mongoose = require('mongoose');

const EngineeringInActionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  caption: { type: String, required: true },
  imageUrl: { type: String, required: true },
  order: { type: Number, default: 0 },
  enabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

EngineeringInActionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('EngineeringInAction', EngineeringInActionSchema);
