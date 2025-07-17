import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Correct route imports — make sure these files exist with correct names!
import userRoutes from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import complexRoutes from './routes/complexRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (cleaned for Mongoose v7+)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Compass'))
  .catch((error) => console.error('❌ MongoDB connection error:', error));

// Basic route
app.get('/', (req, res) => {
  res.send('🎉 Backend API is running...');
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/complexes', complexRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
