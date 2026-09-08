const mongoose = require('mongoose');

const InnovationSchema = new mongoose.Schema({
  title: { type: String, default: 'Innovation & Success Highlight' },
  subject: { type: String, default: 'Micro fines metal recovery using diaphragm jigs' },
  innovationElements: [String],
  result: { type: String },
  tslNormsRevision: {
    client: { type: String, default: 'Tata Steel Limited (TSL)' },
    previousNorm: { type: String, default: '84%' },
    revisedNorm: { type: String, default: '85.5%' },
    context: { type: String, default: 'Conversion plants' }
  },
  impacts: [String],
  sourceRef: { type: String, default: 'Source: Company Credentials — Page 9' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Innovation', InnovationSchema);
