const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/getWorkInfo/:studentNo', (req, res, next) => {
  let sql = 'SELECT companyName, province, address, departmentName, role FROM workdivision WHERE student_no = ?';
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;