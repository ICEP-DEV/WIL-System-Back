const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/studNum/:studentNo', (req, res, next) => {
  const studNum = req.params.studentNo;
  let sql = `UPDATE logbook SET approval = 'Yes' WHERE student_no = ? AND month = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;