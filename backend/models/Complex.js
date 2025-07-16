import mongoose from 'mongoose';

const complexSchema = new mongoose.Schema({
  name: String,
  location: String,
  sports: [String], // e.g., ['Badminton', 'Football']
  pricePerHour: Number,
  availableSlots: [String] // e.g., ['10am–11am', '11am–12pm']
});

const Complex = mongoose.model('Complex', complexSchema);
export default Complex;
