const express = require('express');
const router = express.Router();
const {
  submitAttendance
} = require('../controllers/attendanceApplicationController');
const attendanceController = require('../controllers/attendanceApplicationController');
const controller = require('../controllers/attendanceApplicationController');


router.post('/attendance-application', submitAttendance);        // For Submit
router.post('/cancel', attendanceController.cancelApplication);            // For Cancel
router.get('/pbm', controller.getPBMAttendance);

module.exports = router;
