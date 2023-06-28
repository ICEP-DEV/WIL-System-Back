const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getMentorInfo/:studentNo', (req, res, next) => {
  let sql = `SELECT A.title, A.m_name, A.m_surname, A.mobileNo, A.email_address FROM mentor A, student B 
  WHERE A.student_no = B.student_no AND student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;