const express = require('express');
const router = express.Router();
const { submitLeave } = require('../controllers/leaveController');
const Leave = require('../models/Leave');

router.post('/submit', async (req, res) => {
  const leave = new Leave(req.body);
  await leave.save();
  res.send({ message: 'Leave submitted' });
});
// routes/leaveRoutes.js
router.get('/all', async (req, res) => {
  const leaves = await Leave.find();
  res.send(leaves);


  // PATCH /api/leave/approve/:id
router.patch('/approve/:id', async (req, res) => {
  await Leave.findByIdAndUpdate(req.params.id, { status: 'Approved' });
  res.send({ message: 'Leave approved' });
});
router.patch('/reject/:id', async (req, res) => {
  await Leave.findByIdAndUpdate(req.params.id, { status: 'Rejected' });
  res.send({ message: 'Leave rejected' });
});

});


module.exports = router;
