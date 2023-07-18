const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const router = express.Router();

router.use(bodyParser.json());

router.post('/inviteMentor', (req, res, next) => {
  const values = [
    req.body.student_no,
    req.body.title,
    req.body.m_name,
    req.body.m_surname,
    req.body.email_address,
    req.body.mobileNo,
  ];

  const mentorSql = `INSERT INTO mentor (student_no, title, m_name, m_surname, email_address, mobileNo) VALUES (?,?,?,?,?,?)`;

  conn.query(mentorSql, values, function (err, mentorResult) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert mentor.' });
    }

    console.log('Successfully inserted mentor');
    console.log(mentorResult);

    const logbookSql = `INSERT INTO logbook (logbook_id, date, log_description, submitted_at, student_no, month, status, approval) VALUES ?`;

    let current = new Date();
    let month = current.getMonth() + 1;
    const logbookValues = [];

    for (let i = 0; i < 6; i++) {
      if (month > 12) {
        month = 1;
      }

      const monthlyValues = [
        null,
        '',
        '',
        '',
        req.body.student_no,
        month,
        'closed',
        'inProgress',
      ];

      logbookValues.push(monthlyValues);
      month++;
    }

    conn.query(logbookSql, [logbookValues], function (err, logbookResult) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to insert monthly status.' });
      }

      console.log('Successfully inserted monthly status');
      console.log(logbookResult);

      res.status(200).json({ message: 'Success' });
    });
  });
});

module.exports = router;


/* 
{
    "student_no":"218012345",
    "title":"Miss", 
    "m_name":"Ayanda", 
    "m_surname":"Mlimo",
    "email_address":"am@gmail.com", 
    "mobileNo":"0124578963"
} 
*/