const express = require('express');
const conn = require('../config/db');
const router = express.Router();

let studNum;

router.get('/getSysDoc/:studentNo', (req, res, next) => {
  studNum = req.params.studentNo;
  next();
});

router.get('/sysDoc', (req, res, next) => {
  let sql = 'SELECT systemDoc FROM student WHERE student_no = ?';
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;