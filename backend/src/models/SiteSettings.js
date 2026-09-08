const mongoose = require('mongoose');

const SiteSettingsSchema = new mongoose.Schema({
  companyName: { type: String, default: 'Venkateswar Engg Works Pvt. Ltd.' },
  shortName: { type: String, default: 'Venkateswar Engg Works Pvt. Ltd.' },
  gstin: { type: String, default: '21ARXPK7658Q1ZO' },
  founded: { type: Number, default: 2003 },
  founder: { type: String, default: 'Mr. Jayaram Kothari' },
  managingPartner: { type: String, default: 'Mr. Sreenivas Kothari' },
  contacts: [{
    name: String,
    title: String,
    phone: String,
    email: String
  }],
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 1' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
