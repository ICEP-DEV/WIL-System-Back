const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const router = express.Router();

router.post('/logbook', (req, res, next) => {
  const studentNo = req.body.student_no;
  const date = req.body.date;
  const logDescription = req.body.log_description;
  const submittedAt = req.body.submitted_at;

  // Insert a new logbook entry
  const insertQuery = `INSERT INTO logbook (student_no, date, log_description, submitted_at) VALUES (?, ?, ?, ?)`;
  conn.query(insertQuery, [studentNo, date, logDescription, submittedAt], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert logbook entry.' });
    }
    console.log('Successfully inserted logbook entry');

    // Update the logbook status for the specified month
    const updateQuery = `UPDATE monthly_status SET status = ?, approval = 'no' WHERE student_no = ? AND month = ?`;
    conn.query(updateQuery, ['submitted', studentNo, date.getMonth() + 1], function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update monthly status.' });
      }
      console.log('Successfully updated monthly status');
      res.status(200).json({ 'Message': 'Success' });
    });
  });
});

module.exports = router;
