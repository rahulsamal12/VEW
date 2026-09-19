const AdminUser = require('../models/AdminUser');
const seedData = require('../seed/seedData');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!global.isMongoConnected) {
      return res.status(503).json({ success: false, message: 'Database service unavailable' });
    }

    const user = await AdminUser.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'vew_metallurgical_engineering_jwt_secret_key_2026_secure',
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAdminProfile = async (req, res) => {
  try {
    if (!global.isMongoConnected) {
      return res.status(503).json({ success: false, message: 'Database service unavailable' });
    }
    const user = await AdminUser.findById(req.user.id).select('-password');
    if (user) return res.json({ success: true, user });
    return res.status(404).json({ success: false, message: 'User not found' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    if (!global.isMongoConnected) {
      return res.status(503).json({ success: false, message: 'Database service unavailable' });
    }
    const user = await AdminUser.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Current password incorrect' });
    }
    user.password = newPassword;
    await user.save();
    return res.json({ success: true, message: 'Administrator password updated successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { loginAdmin, getAdminProfile, changePassword };
