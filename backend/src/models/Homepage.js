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
  ctaHeading: { type: String, default: "Partner with India's Most Reliable Metallurgical Operations Team" },
  ctaDescription: { type: String, default: "Whether for Submerged Arc Furnace O&M, Metal Recovery Plant installation, Sinter turnkey execution, or BOOT/BOO models, Venkateswar Engg Works Pvt. Ltd. delivers technical competence and uncompromised uptime." },
  ctaText: { type: String, default: "Submit Project Inquiry" },
  ctaLink: { type: String, default: "/contact" },
  sectors: [{
    title: String,
    description: String,
    icon: String
  }],
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 1' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Homepage', HomepageSchema);
