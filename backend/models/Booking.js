// backend/models/booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regNo: { type: String, required: true },
  course: { type: String, required: true },
  section: { type: String, required: true },
  email: { type: String, required: true },
  eventName: { type: String, required: true },
  time: { type: String, required: true },
  seatNumber: { type: String, required: true }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
