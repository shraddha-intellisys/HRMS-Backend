const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminOnly');

// ⛔ One of these is likely undefined!
const { getAdminDashboard } = require('../controllers/admin.controller');

router.get('/dashboard', authenticate, adminOnly, getAdminDashboard); // 🚫 Error here

module.exports = router;
