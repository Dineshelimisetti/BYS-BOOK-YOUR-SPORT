// backend/controllers/userController.js
import User from '../models/user.js';

// Register new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password }); // NOTE: Password should be hashed in production
    await newUser.save();
    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

// Get all users (for admin)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude passwords
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
};
