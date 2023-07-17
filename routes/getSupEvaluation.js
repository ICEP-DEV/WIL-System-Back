const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/getSupInfo/:student_no', (req, res, next) => {
  const studNum = req.params.student_no;
  let sql = `SELECT student_no, supervisorAssistance, supervisorInterest, supervisorTraining, supervisorMotivation
  supervisorInstruction FROM evaluation_criteria WHERE student_no = ?`;
  conn.query(sql, [studNum], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router;