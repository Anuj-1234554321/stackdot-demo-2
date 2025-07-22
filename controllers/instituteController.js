const Institute = require('../models/Institute');


exports.registerInstitute = async (req, res) => {
  try {
    const institute =  await new Institute(req.body);
    await institute.save();
    res.status(201).json({ message: 'Institute registered successfully', institute });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getInstitutes = async (req, res) => {
  try {
    const filter = {};
    if (req.query.type) {
      filter.type = req.query.type;
    }
    const institutes = await Institute.find(filter)
      .populate('board medium classCategory standards subjects university degreeType examType');
    res.json(institutes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
