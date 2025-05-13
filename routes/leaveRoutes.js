const express = require('express');
const router = express.Router();
const { submitLeave } = require('../controllers/leaveController');
const Leave = require('../models/Leave');

router.post('/submit', submitLeave);

module.exports = router;
