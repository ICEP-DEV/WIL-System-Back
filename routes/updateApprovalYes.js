const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.post('/updateApprovalYes/:studentNo', (req, res, next) => {
  const studNum = req.params.studentNo;
  const logmonth = req.body.month;
  let sql = `UPDATE logbook SET approval = 'Yes' WHERE student_no = ? AND month = ?`;
  conn.query(sql, [studNum, logmonth], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;