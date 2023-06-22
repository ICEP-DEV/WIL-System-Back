const express = require('express');
const conn = require('../config/db');
const router = express.Router();


let studNum;

router.get('/studNum/:studentNo', (req, res, next) => {
  studNum = req.params.studentNo;
});

router.get('/getNameSur', (req, res, next) => {
  let sql = 'SELECT name, surname, student_no FROM student';
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;