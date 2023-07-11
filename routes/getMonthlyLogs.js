const express = require('express');
const conn = require('../config/db');
const router = express.Router();

let studNum;

router.get('/getlogbooks/:studentNo', (req, res, next) => {
  studNum = req.params.studentNo;

  let sql = `SELECT submitted_at, status FROM logbook WHERE student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;
