const Enquiry = require('../models/Enquiries');
const { validationResult } = require('express-validator');

// In-memory store fallback if Mongo is disconnected during dev
const memoryEnquiries = [];

const submitEnquiry = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, company, email, phone, subject, message } = req.body;

  try {
    const enquiry = new Enquiry({
      name,
      company,
      email,
      phone,
      subject,
      message,
      status: 'new'
    });
    await enquiry.save();
    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! Our team will contact you shortly.',
      data: enquiry
    });
  } catch (error) {
    // Fallback store if DB is disconnected
    const newEnquiry = {
      _id: Date.now().toString(),
      name,
      company,
      email,
      phone,
      subject,
      message,
      status: 'new',
      submittedAt: new Date()
    };
    memoryEnquiries.push(newEnquiry);
    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! Our team will contact you shortly.',
      data: newEnquiry
    });
  }
};

const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ submittedAt: -1 });
    return res.json({ success: true, data: enquiries });
  } catch (error) {
    return res.json({ success: true, data: memoryEnquiries });
  }
};

const updateEnquiryStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!enquiry) {
      const memIndex = memoryEnquiries.findIndex(e => e._id === req.params.id);
      if (memIndex !== -1) {
        memoryEnquiries[memIndex].status = status;
        return res.json({ success: true, data: memoryEnquiries[memIndex] });
      }
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    return res.json({ success: true, message: 'Enquiry status updated', data: enquiry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: 'Enquiry deleted' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  submitEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry
};
