const seedData = require('../seed/seedData');
const SiteSettings = require('../models/SiteSettings');
const Homepage = require('../models/Homepage');
const About = require('../models/About');
const HistoryTimeline = require('../models/HistoryTimeline');
const Service = require('../models/Services');
const Client = require('../models/Clients');
const InternationalProject = require('../models/InternationalProjects');
const FurnaceProject = require('../models/FurnaceProjects');
const MRPProject = require('../models/MRPProjects');
const SinterProject = require('../models/SinterProjects');
const Innovation = require('../models/Innovation');
const Operations = require('../models/Operations');
const RawMaterial = require('../models/RawMaterials');
const Maintenance = require('../models/Maintenance');
const Safety = require('../models/Safety');
const KPI = require('../models/KPIs');
const Manpower = require('../models/Manpower');

// Helper to get single document
const getSingleDoc = async (Model, fallbackKey, res) => {
  try {
    if (!global.isMongoConnected) {
      return res.status(503).json({ success: false, message: 'Database service unavailable' });
    }
    const doc = await Model.findOne();
    if (doc) return res.json({ success: true, data: doc });
    return res.status(404).json({ success: false, message: 'Content not found' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Database query error', error: err.message });
  }
};

// Helper to get list documents
const getListDocs = async (Model, fallbackKey, res, sortKey = 'order') => {
  try {
    if (!global.isMongoConnected) {
      return res.status(503).json({ success: false, message: 'Database service unavailable' });
    }
    const docs = await Model.find().sort({ [sortKey]: 1 });
    if (docs && docs.length > 0) return res.json({ success: true, data: docs });
    return res.json({ success: true, data: [] });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Database query error', error: err.message });
  }
};

// Public GET Endpoints
const getSiteSettings = (req, res) => getSingleDoc(SiteSettings, 'siteSettings', res);
const getHomepage = (req, res) => getSingleDoc(Homepage, 'homepage', res);
const getAbout = (req, res) => getSingleDoc(About, 'about', res);
const getHistoryTimeline = (req, res) => getListDocs(HistoryTimeline, 'historyTimeline', res);
const getServices = (req, res) => getListDocs(Service, 'services', res);

const getServiceBySlug = async (req, res) => {
  try {
    if (!global.isMongoConnected) {
      return res.status(503).json({ success: false, message: 'Database service unavailable' });
    }
    const service = await Service.findOne({ slug: req.params.slug });
    if (service) return res.json({ success: true, data: service });
    return res.status(404).json({ success: false, message: 'Service not found' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Database query error', error: err.message });
  }
};

const getClients = (req, res) => getListDocs(Client, 'clients', res);
const getInternationalProjects = (req, res) => getListDocs(InternationalProject, 'internationalProjects', res);
const getFurnaceProjects = (req, res) => getListDocs(FurnaceProject, 'furnaceProjects', res);
const getMRPProjects = (req, res) => getListDocs(MRPProject, 'mrpProjects', res);
const getSinterProjects = (req, res) => getListDocs(SinterProject, 'sinterProjects', res);
const getInnovation = (req, res) => getSingleDoc(Innovation, 'innovation', res);
const getOperations = (req, res) => getSingleDoc(Operations, 'operations', res);
const getRawMaterials = (req, res) => getSingleDoc(RawMaterial, 'rawMaterials', res);
const getMaintenance = (req, res) => getSingleDoc(Maintenance, 'maintenance', res);
const getSafety = (req, res) => getSingleDoc(Safety, 'safety', res);
const getKPIs = (req, res) => getSingleDoc(KPI, 'kpis', res);
const getManpower = (req, res) => getSingleDoc(Manpower, 'manpower', res);

// Admin Generic Single Doc Update
const updateSingleDoc = (Model) => async (req, res) => {
  if (!global.isMongoConnected) return res.status(503).json({ success: false, message: 'Database service unavailable' });
  try {
    let doc = await Model.findOne();
    if (!doc) {
      doc = new Model(req.body);
    } else {
      Object.assign(doc, req.body, { updatedAt: Date.now() });
    }
    await doc.save();
    return res.json({ success: true, message: 'Content updated successfully', data: doc });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Admin Generic List CRUD
const createListDoc = (Model) => async (req, res) => {
  if (!global.isMongoConnected) return res.status(503).json({ success: false, message: 'Database service unavailable' });
  try {
    const doc = new Model(req.body);
    await doc.save();
    return res.json({ success: true, message: 'Item created successfully', data: doc });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateListDoc = (Model) => async (req, res) => {
  if (!global.isMongoConnected) return res.status(503).json({ success: false, message: 'Database service unavailable' });
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ success: false, message: 'Item not found' });
    return res.json({ success: true, message: 'Item updated successfully', data: doc });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteListDoc = (Model) => async (req, res) => {
  if (!global.isMongoConnected) return res.status(503).json({ success: false, message: 'Database service unavailable' });
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ success: false, message: 'Item not found' });
    return res.json({ success: true, message: 'Item deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getSiteSettings,
  getHomepage,
  getAbout,
  getHistoryTimeline,
  getServices,
  getServiceBySlug,
  getClients,
  getInternationalProjects,
  getFurnaceProjects,
  getMRPProjects,
  getSinterProjects,
  getInnovation,
  getOperations,
  getRawMaterials,
  getMaintenance,
  getSafety,
  getKPIs,
  getManpower,

  // Admin Single Updates
  updateSiteSettings: updateSingleDoc(SiteSettings),
  updateHomepage: updateSingleDoc(Homepage),
  updateAbout: updateSingleDoc(About),
  updateInnovation: updateSingleDoc(Innovation),
  updateOperations: updateSingleDoc(Operations),
  updateRawMaterials: updateSingleDoc(RawMaterial),
  updateMaintenance: updateSingleDoc(Maintenance),
  updateSafety: updateSingleDoc(Safety),
  updateKPIs: updateSingleDoc(KPI),
  updateManpower: updateSingleDoc(Manpower),

  // Admin List CRUD
  createFurnaceProject: createListDoc(FurnaceProject),
  updateFurnaceProject: updateListDoc(FurnaceProject),
  deleteFurnaceProject: deleteListDoc(FurnaceProject),

  createMRPProject: createListDoc(MRPProject),
  updateMRPProject: updateListDoc(MRPProject),
  deleteMRPProject: deleteListDoc(MRPProject),

  createSinterProject: createListDoc(SinterProject),
  updateSinterProject: updateListDoc(SinterProject),
  deleteSinterProject: deleteListDoc(SinterProject),

  createInternationalProject: createListDoc(InternationalProject),
  updateInternationalProject: updateListDoc(InternationalProject),
  deleteInternationalProject: deleteListDoc(InternationalProject),

  createService: createListDoc(Service),
  updateService: updateListDoc(Service),
  deleteService: deleteListDoc(Service),

  createClient: createListDoc(Client),
  updateClient: updateListDoc(Client),
  deleteClient: deleteListDoc(Client)
};
