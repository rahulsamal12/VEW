const mongoose = require('mongoose');

const siteImageSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  filename: {
    type: String
  },
  altText: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('SiteImage', siteImageSchema);
