const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/getCoInfo/:student_no', (req, res, next) => {
  const studNum = req.params.student_no;
  let sql = `SELECT coworkerAssistance, coworkerInterest, coworkerTraining, coworkerMotivation
  coworkerInstruction FROM evaluation_criteria`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;