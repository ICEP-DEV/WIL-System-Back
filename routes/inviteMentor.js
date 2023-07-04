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

    let current = new Date();
    let month = current.getMonth() + 5;

    for (let i = 0; i < 6; i++) {
      if (month > 6) {
        month = 1;
      }


      const monthlyvalues = [
        null,
        req.body.student_no,
        month,
        req.body.status,
        req.body.approval,
      ];

      const data = `INSERT INTO monthly_status (month_Id, student_no, month, status, approval) VALUES (?,?,?,'closed','no')`;
      conn.query(data, monthlyvalues, function (err, result) {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to insert monthly status.' });
        }
      });

      month++;
    }

    res.status(200).json({ message: 'Success' });
  });
});

module.exports = router;
