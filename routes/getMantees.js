const express = require('express');
const conn = require('../config/db');
const router = express.Router();


let studNum;


router.get('/getMantee/:studentNo', (req, res, next) => {
  studNum = req.params.studentNo;
  let sql = `SELECT A.student_no, A.surname, A.name  FROM student A, mentor B 
  WHERE A.student_no = B.student_no AND student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;