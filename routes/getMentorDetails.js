const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/getMentorInfo/:student_no', (req, res, next) => {
  const studNum = req.params.student_no;
  let sql = `SELECT S.student_no, M.title, M.m_name, M.m_surname, M.mobileNo, M.email_address FROM mentor M, student S 
  WHERE S.student_no = M.student_no AND S.student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;