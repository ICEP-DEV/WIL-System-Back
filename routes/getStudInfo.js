const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getStudInfo', (req, res, next) => {
  let sql = `SELECT student_no, name, surname, email FROM student`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;