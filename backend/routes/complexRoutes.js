import express from 'express';
import { getComplexes, addComplex } from '../controllers/complexController.js';

const router = express.Router();

router.get('/', getComplexes);
router.post('/add', addComplex);

export default router;
