const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const seedData = require('./seedData');

const AdminUser = require('../models/AdminUser');
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

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    if (!global.isMongoConnected) {
      console.error('\n[FATAL] SEED FAILED');
      console.error('MongoDB daemon is not running. Could not establish connection.');
      console.error('Check your connection string in .env and ensure the service is active.');
      process.exit(1);
    }

    console.log('\n--- STARTING IDEMPOTENT DATABASE SEED ---\n');

    let stats = { inserted: 0, updated: 0, skipped: 0 };

    const upsertSingle = async (Model, data) => {
      const existing = await Model.findOne();
      if (existing) {
        await Model.findByIdAndUpdate(existing._id, data);
        stats.updated++;
        console.log(`[UPDATED] ${Model.modelName}`);
      } else {
        await Model.create(data);
        stats.inserted++;
        console.log(`[INSERTED] ${Model.modelName}`);
      }
    };

    const upsertList = async (Model, dataList, uniqueKey) => {
      for (const item of dataList) {
        const query = {};
        query[uniqueKey] = item[uniqueKey];
        const existing = await Model.findOne(query);
        if (existing) {
          await Model.findByIdAndUpdate(existing._id, item);
          stats.updated++;
        } else {
          await Model.create(item);
          stats.inserted++;
        }
      }
      console.log(`[UPSERTED] ${Model.modelName} (Processed ${dataList.length} items)`);
    };

    // Admin User
    const existingAdmin = await AdminUser.findOne({ email: seedData.adminUser.email });
    if (!existingAdmin) {
      await AdminUser.create(seedData.adminUser);
      stats.inserted++;
      console.log('[INSERTED] AdminUser');
    } else {
      stats.skipped++;
      console.log('[SKIPPED] AdminUser (Already exists)');
    }

    // Single Documents
    await upsertSingle(SiteSettings, seedData.siteSettings);
    await upsertSingle(Homepage, seedData.homepage);
    await upsertSingle(About, seedData.about);
    await upsertSingle(Innovation, seedData.innovation);
    await upsertSingle(Operations, seedData.operations);
    await upsertSingle(RawMaterial, seedData.rawMaterials);
    await upsertSingle(Maintenance, seedData.maintenance);
    await upsertSingle(Safety, seedData.safety);
    await upsertSingle(KPI, seedData.kpis);
    await upsertSingle(Manpower, seedData.manpower);

    // List Documents
    await upsertList(HistoryTimeline, seedData.historyTimeline, 'year');
    await upsertList(Service, seedData.services, 'title');
    await upsertList(Client, seedData.clients, 'name');
    await upsertList(InternationalProject, seedData.internationalProjects, 'clientName');
    await upsertList(FurnaceProject, seedData.furnaceProjects, 'clientName');
    await upsertList(MRPProject, seedData.mrpProjects, 'clientName');
    await upsertList(SinterProject, seedData.sinterProjects, 'clientName');

    console.log('\n--- SEED COMPLETED SUCCESSFULLY ---');
    console.log(`Inserted: ${stats.inserted}`);
    console.log(`Updated: ${stats.updated}`);
    console.log(`Skipped: ${stats.skipped}`);
    
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('\n[FATAL] Error seeding database:', error.message);
    mongoose.connection.close();
    process.exit(1);
    process.exit(1);
  }
};

seedDatabase();
