const mongoose = require('mongoose');

const HomepageSchema = new mongoose.Schema({
  heroHeading: { type: String, default: 'Engineering Excellence in Ferro Alloys & Metallurgical Engineering' },
  heroSubheading: { type: String, default: 'Furnace O&M, Metal Recovery Plants, Sinter Plants & Turnkey Execution' },
  companyIntro: { type: String },
  keyStatistics: [{
    stat: String,
    label: String,
    sourceRef: String
  }],
  whyVew: [{
    title: String,
    description: String
  }],
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 1' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Homepage', HomepageSchema);
