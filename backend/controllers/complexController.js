import Complex from '../models/Complex.js';

export const getComplexes = async (req, res) => {
  try {
    const complexes = await Complex.find();
    res.json(complexes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching complexes' });
  }
};

export const addComplex = async (req, res) => {
  try {
    const newComplex = new Complex(req.body);
    await newComplex.save();
    res.status(201).json(newComplex);
  } catch (error) {
    res.status(400).json({ message: 'Error adding complex' });
  }
};

