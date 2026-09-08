const mongoose = require('mongoose');

global.isMongoConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vew_db';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    global.isMongoConnected = true;
    console.log(`MongoDB Connected successfully to DB: ${conn.connection.name}`);
  } catch (error) {
    global.isMongoConnected = false;
    if (process.env.NODE_ENV === 'production') {
      console.error(`PRODUCTION MONGODB CONNECTION ERROR: ${error.message}`);
    } else {
      console.warn(`Development MongoDB Warning: ${error.message}. Using development fallback dataset.`);
    }
  }
};

module.exports = connectDB;
