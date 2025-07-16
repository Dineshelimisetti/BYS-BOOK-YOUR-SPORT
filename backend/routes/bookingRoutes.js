// backend/routes/bookingRoutes.js
import express from 'express';
import { createBooking, getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

// POST /api/bookings - Submit a booking
router.post('/', createBooking);

// GET /api/bookings - Fetch all bookings
router.get('/', getAllBookings);

export default router;
