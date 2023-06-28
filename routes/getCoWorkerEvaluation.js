const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/getCoInfo', (req, res, next) => {
  let sql = `SELECT coworkerAssistance, coworkerInterest, coworkerTraining, coworkerMotivation
  coworkerInstruction FROM evaluation_criteria`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;