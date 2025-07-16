import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String, // Hash this in real apps
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
