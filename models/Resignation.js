// models/Resignation.js
const mongoose = require('mongoose');

const resignationSchema = new mongoose.Schema({
  employeeCode: { type: String, required: true },
  employeeName: { type: String, required: true },
  department: { type: String, required: true },
  lastWorkingDate: { type: String, required: true },
  reason: { type: String, required: true }
});

module.exports = mongoose.model('Resignation', resignationSchema);
