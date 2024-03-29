const express = require('express');
const conn = require('../config/db');
const router = express.Router();

let studNum;

router.get('/getMonthlyStatus/:student_no', (req, res, next) => {
    studNum = req.params.student_no;

    let sql = `SELECT month, status, approval FROM logbook WHERE student_no = ?`;
    conn.query(sql, [studNum], (err, result) => {
        if (err) throw err;
        res.status(200).json({ result });
      });
  });
  
  module.exports = router;