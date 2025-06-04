const express = require('express');
const router = express.Router();
const { submitResignation } = require('../controllers/resignationController');

router.post('/', submitResignation);

module.exports = router;
