const express = require('express');
const router = express.Router();
const { protectAdmin } = require('../middleware/authMiddleware');
const contentController = require('../controllers/contentController');
const { getEnquiries, updateEnquiryStatus, deleteEnquiry } = require('../controllers/enquiryController');

// Protect all admin routes
router.use(protectAdmin);

// Single Doc Updates
router.put('/settings', contentController.updateSiteSettings);
router.put('/homepage', contentController.updateHomepage);
router.put('/about', contentController.updateAbout);
router.put('/innovation', contentController.updateInnovation);
router.put('/operations', contentController.updateOperations);
router.put('/raw-materials', contentController.updateRawMaterials);
router.put('/maintenance', contentController.updateMaintenance);
router.put('/safety', contentController.updateSafety);
router.put('/kpis', contentController.updateKPIs);
router.put('/manpower', contentController.updateManpower);

// Furnace Projects CRUD
router.post('/projects/furnace', contentController.createFurnaceProject);
router.put('/projects/furnace/:id', contentController.updateFurnaceProject);
router.delete('/projects/furnace/:id', contentController.deleteFurnaceProject);

// MRP Projects CRUD
router.post('/projects/mrp', contentController.createMRPProject);
router.put('/projects/mrp/:id', contentController.updateMRPProject);
router.delete('/projects/mrp/:id', contentController.deleteMRPProject);

// Sinter Projects CRUD
router.post('/projects/sinter', contentController.createSinterProject);
router.put('/projects/sinter/:id', contentController.updateSinterProject);
router.delete('/projects/sinter/:id', contentController.deleteSinterProject);

// International Projects CRUD
router.post('/projects/international', contentController.createInternationalProject);
router.put('/projects/international/:id', contentController.updateInternationalProject);
router.delete('/projects/international/:id', contentController.deleteInternationalProject);

// Services CRUD
router.post('/services', contentController.createService);
router.put('/services/:id', contentController.updateService);
router.delete('/services/:id', contentController.deleteService);

// Clients CRUD
router.post('/clients', contentController.createClient);
router.put('/clients/:id', contentController.updateClient);
router.delete('/clients/:id', contentController.deleteClient);

// Enquiries Management
router.get('/enquiries', getEnquiries);
router.put('/enquiries/:id/status', updateEnquiryStatus);
router.delete('/enquiries/:id', deleteEnquiry);

module.exports = router;
