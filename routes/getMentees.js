const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getMentees/:email_address', (req, res, next) => {
  const email_address = req.params.email_address;
  const sql = `SELECT S.student_no, S.name, S.surname FROM student S, mentor M 
  WHERE S.student_no = M.student_no AND M.email_address = ?`;

  conn.query(sql, [email_address], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json({ mentees: result });
    }
  });
});

module.exports = router;
