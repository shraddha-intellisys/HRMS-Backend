const express = require('express');
const router = express.Router();
const { submitLeave } = require('../controllers/leaveController');
const Leave = require('../models/Leave');

router.post('/submit', submitLeave);
// routes/leaveRoutes.js
router.get('/all', async (req, res) => {
  try {
    const leaves = await Leave.find(); // not LeaveModel
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});


module.exports = router;
