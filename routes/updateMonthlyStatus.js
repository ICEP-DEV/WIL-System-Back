const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const router = express.Router();

router.post('/updateMonthlyStatus', (req, res, next) => {
  const studentNo = req.body.student_no;
  const submissionMonth = req.body.month;
  const submissionStatus = req.body.status;

  
  // Update the submitted status for the specified month
  const updateQuery = `UPDATE monthly_status SET status = ?, approval = 'no' WHERE student_no = ? AND month = ?`;
  conn.query(updateQuery, [submissionStatus, studentNo, submissionMonth], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update monthly status.' });
    }
    console.log(`Successfully updated status for month ${submissionMonth}`);

    const nextMonth = (submissionMonth % 12) + 1;
    const nextStatus = (submissionStatus === 'submitted') ? 'opened' : 'closed';

    // Update the status for the next month
    const nextUpdateQuery = `UPDATE monthly_status SET status = ?, approval = 'no' WHERE student_no = ? AND month = ?`;
    conn.query(nextUpdateQuery, [nextStatus, studentNo, nextMonth], function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update next monthly status.' });
      }
      console.log(`Successfully updated status for month ${nextMonth}`);
      res.status(200).json({ 'Message': 'Success' });
    });
  });
});

module.exports = router;
