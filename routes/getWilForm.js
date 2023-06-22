const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getWilInfo', (req, res, next) => {
  let sql = `SELECT A.name, A.surname, A.student_no, B.approvedEmployer, B.contactPerson, B.telNumber,
  B.emp_email, B.city, B.postalAddress, B.studyPeriod  FROM student A, wilform B `;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;
