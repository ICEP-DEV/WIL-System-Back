const express = require('express');
const conn = require('../config/db');
const router = express.Router();

let studNum;

router.get('/getWilInfo/:studentNo', (req, res, next) => {
  studNum = req.params.studentNo;

  let sql = `SELECT A.name, A.surname, A.student_no, B.approvedEmployer, B.contactPerson, B.telNumber,
  B.emp_email, B.city, B.postalAddress, B.studyPeriod  FROM student A, wilform B WHERE A.student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;