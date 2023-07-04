const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const router = express.Router();

router.post('/updateMonthlyStatus', (req, res, next) => {
  const studentNo = req.body.student_no;

  // Update the status for month 1 to "submitted"
  const updateQuery = `UPDATE monthly_status SET status = 'submitted' WHERE student_no = ? AND month = 1`;
  conn.query(updateQuery, [studentNo], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update monthly status.' });
    }
    console.log('Successfully updated status for month 1');
    updateStatusForMonth(2);
  });

  function updateStatusForMonth(month) {
    if (month > 6) {
      return res.status(200).json({ 'Message': 'Success' });
    }

    const status = (month === 2) ? 'opened' : 'closed';

    const updateQuery = `UPDATE monthly_status SET status = ?, approval = 'no' WHERE student_no = ? AND month = ?`;
    conn.query(updateQuery, [status, studentNo, month], function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update monthly status.' });
      }
      console.log(`Successfully updated status for month ${month}`);
      updateStatusForMonth(month + 1);
    });
  }
});

module.exports = router;
