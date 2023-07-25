const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getStudInfo/:wilCoord_email', (req, res, next) => {
  const 	wilCoord_email = req.params.	wilCoord_email;
  let sql = `SELECT S.student_no, S.name, S.surname, S.email FROM student S, wil_coordinator W 
  WHERE S.student_no = W.student_no AND wilCoord_email = ?`;
  conn.query(sql, [wilCoord_email], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json({ result });
    }
  });
});


module.exports = router;
