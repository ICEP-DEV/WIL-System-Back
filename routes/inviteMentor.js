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

  const sql = `INSERT INTO mentor ( student_no, title, m_name, m_surname,
      email_address, mobileNo) VALUES (?,?,?,?,?,?)`;

  conn.query(sql, values, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert mentor.' });
    }

    console.log('Successfully inserted');
    console.log(result)

    const data = `INSERT INTO logbook (logbook_id, date, log_description, submitted_at, student_no, month, status, approval) VALUES (?,?,?,?,?,?,?,?)`;

    let current = new Date();
    let month = current.getMonth() + 5;
    for (let i = 0; i < 6; i++) {
      if (month > 6) {
        month = 1;
      }


    

      const monthlyvalues = [
        null,
        0,
        '',
        '',
        req.body.student_no,
        month,
        'closed',
        0,
      ];

      conn.query(data, monthlyvalues, function (err, row) {
        if (err) {
          console.error(err);

          console.log(row)
          //return res.status(500).json({ error: 'Failed to insert monthly status.' });
        }
      });

      month++;
    }

    res.status(200).json({ message: 'Success' });
  });
});

module.exports = router;
