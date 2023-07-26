const express = require('express');
const conn = require('../config/db');
const { log } = require('console');
const router = express.Router();


router.get('/open/:studentNo', (req, res, next) => {
  const studNum = req.params.studentNo;
  const logmonth = req.body.month;
  let sql = `SELECT month, logbook_id  FROM logbook WHERE student_no = ? AND status = "closed" AND month = Month(CURRENT_TIMESTAMP);`;
  conn.query(sql, [studNum, logmonth], (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length == 1){
        console.log(result[0].logbook_id)
        let sql2 = `UPDATE logbook SET status = "open" WHERE logbook_id = ?`;
        conn.query(sql2, result[0].logbook_id, (err, result) => {
            if (err) throw err;
        })

    }

  });
});

module.exports = router;