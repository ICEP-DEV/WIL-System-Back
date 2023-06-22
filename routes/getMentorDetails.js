const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getMentorInfo', (req, res, next) => {
  let sql = `SELECT title, m_name, m_surname, mobileNo, email_address FROM mentor`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;