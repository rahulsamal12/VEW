const mongoose = require('mongoose');
const AdminActivity = require('../models/AdminActivity');
const FurnaceProject = require('../models/FurnaceProjects');
const MRPProject = require('../models/MRPProjects');
const SinterProject = require('../models/SinterProjects');
const InternationalProject = require('../models/InternationalProjects');
const Manpower = require('../models/Manpower');
const Enquiry = require('../models/Enquiries');
const Client = require('../models/Clients');
const Homepage = require('../models/Homepage');
const About = require('../models/About');
const HistoryTimeline = require('../models/HistoryTimeline');
const EngineeringInAction = require('../models/EngineeringInAction');

exports.getDashboardStats = async (req, res) => {
  try {
    const [
      furnaceCount, mrpCount, sinterCount, internationalCount,
      totalEnquiries, newEnquiries, recentEnquiries,
      totalClients, recentClientsList,
      manpowerDoc,
      recentActivity,
      homeDoc, aboutDoc, journeyCount,
      engineeringInActionCount
    ] = await Promise.all([
      FurnaceProject.countDocuments(),
      MRPProject.countDocuments(),
      SinterProject.countDocuments(),
      InternationalProject.countDocuments(),
      Enquiry.countDocuments(),
      Enquiry.countDocuments({ status: 'new' }),
      Enquiry.find().sort({ createdAt: -1 }).limit(5),
      Client.countDocuments(),
      Client.find().sort({ _id: -1 }).limit(5),
      Manpower.findOne(),
      AdminActivity.find().sort({ timestamp: -1 }).limit(8),
      Homepage.findOne(),
      About.findOne(),
      HistoryTimeline.countDocuments(),
      EngineeringInAction.countDocuments()
    ]);

    res.json({
      success: true,
      data: {
        projects: {
          furnace: furnaceCount,
          mrp: mrpCount,
          sinter: sinterCount,
          international: internationalCount,
          total: furnaceCount + mrpCount + sinterCount + internationalCount
        },
        enquiries: {
          total: totalEnquiries,
          new: newEnquiries,
          recent: recentEnquiries,
          latestDate: recentEnquiries.length > 0 ? recentEnquiries[0].createdAt : null
        },
        clients: {
          total: totalClients,
          recent: recentClientsList
        },
        manpower: manpowerDoc || null,
        activity: recentActivity,
        engineeringInActionCount,
        contentStatus: {
          home: homeDoc ? 'Configured' : 'Pending',
          about: aboutDoc ? 'Configured' : 'Pending',
          journey: journeyCount > 0 ? 'Configured' : 'Pending',
          images: 'Configured', // Checked via Site Images generic layout
          clients: totalClients > 0 ? 'Configured' : 'Pending'
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
