const express = require('express');
const router = express.Router();
const controller = require('../controllers/engineeringInActionController');
const { protectAdmin } = require('../middleware/authMiddleware');

router.get('/', controller.getEngineeringInAction);

// Protected routes
router.post('/', protectAdmin, controller.createItem);
router.put('/settings', protectAdmin, controller.updateSettings);
router.put('/:id', protectAdmin, controller.updateItem);
router.delete('/:id', protectAdmin, controller.deleteItem);

module.exports = router;
