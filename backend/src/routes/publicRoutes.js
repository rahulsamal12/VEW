const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const contentController = require('../controllers/contentController');
const { submitEnquiry } = require('../controllers/enquiryController');

// Content API Endpoints
router.get('/settings', contentController.getSiteSettings);
router.get('/homepage', contentController.getHomepage);
router.get('/about', contentController.getAbout);
router.get('/journey', contentController.getHistoryTimeline);
router.get('/services', contentController.getServices);
router.get('/services/:slug', contentController.getServiceBySlug);
router.get('/clients', contentController.getClients);
router.get('/projects/international', contentController.getInternationalProjects);
router.get('/projects/furnace', contentController.getFurnaceProjects);
router.get('/projects/mrp', contentController.getMRPProjects);
router.get('/projects/sinter', contentController.getSinterProjects);
router.get('/innovation', contentController.getInnovation);
router.get('/operations', contentController.getOperations);
router.get('/raw-materials', contentController.getRawMaterials);
router.get('/maintenance', contentController.getMaintenance);
router.get('/safety', contentController.getSafety);
router.get('/kpis', contentController.getKPIs);
router.get('/manpower', contentController.getManpower);

// Public Contact / Enquiry Submission
router.post(
  '/enquiry',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('company', 'Company name is required').notEmpty(),
    check('phone', 'Phone number is required').notEmpty(),
    check('subject', 'Subject is required').notEmpty(),
    check('message', 'Message is required').notEmpty()
  ],
  submitEnquiry
);

module.exports = router;
