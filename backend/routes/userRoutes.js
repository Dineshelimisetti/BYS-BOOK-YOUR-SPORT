// backend/routes/userRoutes.js
import express from 'express';
import { registerUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/', getUsers); // optional – admin panel

export default router;
