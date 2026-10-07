const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './.env' });
dotenv.config({ path: './.env.local' });

// Models
const FurnaceProject = require('./src/models/FurnaceProjects');
const MRPProject = require('./src/models/MRPProjects');
const SinterProject = require('./src/models/SinterProjects');
const InternationalProject = require('./src/models/InternationalProjects');
const Service = require('./src/models/Services');
const Client = require('./src/models/Clients');

async function cleanup() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected for cleanup.');

    const models = [FurnaceProject, MRPProject, SinterProject, InternationalProject, Service, Client];
    let totalDeleted = 0;

    for (const Model of models) {
      // Find items matching DYNAMIC_TEST or DYNAMIC_UPDATED
      const query = {
        $or: [
          { client: { $regex: /DYNAMIC_/i } },
          { name: { $regex: /DYNAMIC_/i } },
          { title: { $regex: /DYNAMIC_/i } },
        ]
      };
      
      const result = await Model.deleteMany(query);
      if (result.deletedCount > 0) {
        console.log(`Deleted ${result.deletedCount} items from ${Model.modelName}`);
        totalDeleted += result.deletedCount;
      }
    }

    console.log(`Cleanup complete. Total records deleted: ${totalDeleted}`);
    process.exit(0);
  } catch (err) {
    console.error('Error during cleanup:', err);
    process.exit(1);
  }
}

cleanup();
