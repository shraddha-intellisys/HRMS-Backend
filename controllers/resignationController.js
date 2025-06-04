const Resignation = require('../models/Resignation');

exports.submitResignation = async (req, res) => {
  try {
    const resignation = new Resignation(req.body);
    await resignation.save();
    res.status(200).json({ message: 'Resignation submitted', data: resignation });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
