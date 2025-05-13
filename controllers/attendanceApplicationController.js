const AttendanceApplication = require('../models/AttendanceApplication');

// ✅ Submit Application
exports.submitAttendance = async (req, res) => {
  try {
    const data = req.body;

    if (!data.employeeName || !data.employeeCode || !data.applicationDate || !data.applicationType || !data.reason) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newApplication = new AttendanceApplication(data);
    await newApplication.save();

    res.status(200).json({ message: 'Attendance application submitted successfully.' });
  } catch (error) {
    console.error('❌ Error submitting attendance:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Cancel Application
exports.cancelApplication = async (req, res) => {
  try {
    const { applicationId } = req.body;
    // Perform cancellation logic here (e.g., delete or update status)
    // Example:
    // await AttendanceApplication.findByIdAndUpdate(applicationId, { status: 'cancelled' });

    res.status(200).json({ message: 'Application cancelled successfully' });
  } catch (err) {
    console.error('❌ Cancel Error:', err.message);
    res.status(500).json({ message: 'Server error while cancelling application' });
  }
};

// Fetch PBM entries
exports.getPBMAttendance = async (req, res) => {
  try {
    const data = await AttendanceApplication.find({ status: 'PBM' });
    res.json(data);
  } catch (error) {
    console.error('❌ Error fetching PBM attendance:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

