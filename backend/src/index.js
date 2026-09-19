const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/publicRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Root endpoint for API health check
app.get('/', (req, res) => {
  res.json({
    company: 'Venkateswar Engg Works Pvt. Ltd.',
    status: 'API Active',
    version: '1.0.0'
  });
});

// 404 handler
app.use((req, res, next) => res.status(404).json({ success: false, message: 'API Route Not Found' }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend API server running on port ${PORT}`);
});
