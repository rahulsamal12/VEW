const express = require('express');
const router = express.Router();
const { loginAdmin, getAdminProfile, changePassword } = require('../controllers/authController');
const { protectAdmin } = require('../middleware/authMiddleware');

router.post('/login', loginAdmin);
router.get('/profile', protectAdmin, getAdminProfile);
router.post('/change-password', protectAdmin, changePassword);

module.exports = router;
