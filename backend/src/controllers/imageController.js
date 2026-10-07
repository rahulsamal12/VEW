const path = require('path');
const fs = require('fs');
const SiteImage = require('../models/SiteImage');

// Helper for sending 503 if DB disconnected
const checkDbConnection = (res) => {
  if (!global.isMongoConnected) {
    res.status(503).json({ success: false, message: 'Database service unavailable' });
    return false;
  }
  return true;
};

// GET /api/images
// Public endpoint to retrieve all configured images
const getAllImages = async (req, res) => {
  if (!checkDbConnection(res)) return;
  try {
    const images = await SiteImage.find({});
    // Return a map of section -> url for easy frontend usage
    const imageMap = {};
    images.forEach(img => {
      imageMap[img.section] = img.url;
    });
    return res.json({ success: true, data: imageMap });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/admin/images/:section
// Admin endpoint to upload/replace an image for a specific section
const uploadImage = async (req, res) => {
  if (!checkDbConnection(res)) return;
  try {
    const { section } = req.params;
    
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }

    // Determine public URL path
    const fileUrl = `/uploads/images/${req.file.filename}`;

    // Update or create MongoDB entry
    let image = await SiteImage.findOne({ section });
    if (image) {
      // Optional: Delete old file from filesystem to save space
      if (image.url && image.url.startsWith('/uploads/images/')) {
        const oldFilePath = path.join(__dirname, '../../', image.url);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
      image.url = fileUrl;
      image.filename = req.file.filename;
      image.updatedAt = Date.now();
      await image.save();
    } else {
      image = new SiteImage({
        section,
        url: fileUrl,
        filename: req.file.filename
      });
      await image.save();
    }

    return res.json({ success: true, message: 'Image uploaded successfully', data: image });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getAllImages,
  uploadImage
};
