const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.get('/getStudInfo/:wilCoord_id', (req, res, next) => {
  const 	wilCoord_id = req.params.	wilCoord_id;
  let sql = `SELECT S.student_no, S.initials, S.surname, S.email 
  FROM student S, wil_coordinator W, stud_dep A
  WHERE S.student_no = A.student_no
  AND A.wilCoord_id = W.wilCoord_id
   AND W.wilCoord_id = ?`;
  conn.query(sql, [wilCoord_id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json({ result });
    }
  });
});


module.exports = router;
