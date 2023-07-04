const express = require('express');
const conn = require('../config/db');
const router = express.Router();

let studNum;
router.get('/getMentorInfo/:student_no', (req, res, next) => {
  studNum = req.params.student_no;
  let sql = `SELECT student_no, title, m_name, m_surname, mobileNo, email_address FROM mentor WHERE student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;