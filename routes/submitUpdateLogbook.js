const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.post('/subLogbook/:month', (req, res, next) => {
  const logMonth = req.params.month;
  const studentNo = req.body.student_no;
  const date = req.body.date;
  const logDescription = req.body.log_description;
  const submittedAt = req.body.submitted_at;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  // Insert a new logbook entry
  const insertQuery = `UPDATE logbook SET student_no = ?, date = ?, log_description = ?, submitted_at = ? WHERE month = ? AND student_no = ?`;
  conn.query(
    insertQuery,
    [studentNo, date, logDescription, submittedAt, logMonth, studentNo],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to insert logbook entry.' });
      }
      console.log('Successfully inserted logbook entry');

      // Update the logbook status for the specified month and student
      const updateQuery = `UPDATE logbook SET status = ?, approval = 'pending' WHERE student_no = ? AND month = ?`;
      conn.query(updateQuery, ['submitted', studentNo, currentMonth], function (err, result) {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to update monthly status.' });
        }
        console.log('Successfully updated monthly status');

        if (currentMonth !== 12) {
          // Wait for the next month and update the status to 'open' for the next month and student
          const nextMonth = currentMonth + 1;
          setTimeout(() => {
            const nextUpdateQuery = `UPDATE logbook SET status = ?, approval = 'no' WHERE student_no = ? AND month = ?`;
            conn.query(nextUpdateQuery, ['open', studentNo, nextMonth], function (err, result) {
              if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to update monthly status.' });
              }
              console.log('Successfully updated next monthly status');
              res.status(200).json({ message: 'Success' });
            });
          }, 30 * 24 * 60 * 60 * 1000); // Wait for 30 days (assuming each month has 30 days)
        } else {
          // Handle the case when it's already December
          res.status(200).json({ message: 'Success' });
        }
      });
    }
  );
});

module.exports = router;


/* 
{
    "student_no":"212233445", 
    "date":"2023-07-17", 
    "log_description":"If you are using the Postman web client, you will need to also download the Postman desktop agent. The Postman agent overcomes the Cross-Origin Resource Sharing (CORS) limitations of browsers, and facilitates API request sending from your browser version of Postman. Read the blog post.", 
    "submitted_at":""
} 
*/