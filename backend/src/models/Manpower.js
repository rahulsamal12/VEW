const mongoose = require('mongoose');

const ManpowerSchema = new mongoose.Schema({
  title: { type: String, default: 'Manpower Strength — As on Date' },
  totalStrength: { type: String, default: '~3,100 personnel' },
  sitesCount: { type: String, default: '20+ sites' },
  scope: [String],
  furnaceSites: [{
    clientSite: String,
    strength: Number
  }],
  mrpSites: [{
    clientSite: String,
    strength: Number
  }],
  sinterSites: [{
    clientSite: String,
    strength: Number
  }],
  keyObservations: [String],
  conclusion: { type: String },
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 10' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Manpower', ManpowerSchema);
