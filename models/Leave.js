const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  applicationDate: { type: Date, required: true },
  applicationType: { type: String, required: true },
  leaveType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  fromHalf: { type: Boolean, default: false },
  firstHalfFrom: { type: Boolean, default: false },
  secondHalfFrom: { type: Boolean, default: false },
  toDate: { type: Date, required: true },
  toHalf: { type: Boolean, default: false },
  firstHalfTo: { type: Boolean, default: false },
  reason: { type: String, required: true },
  remarks: { type: String },
  ccTo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Leave', leaveSchema);
