const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/logbook', (req, res, next) => {
   
    const values = [
     req.body.student_no,
     req.body.date,
     req.body.log_description,
     req.body.submitted_at,
     
    ]

    let sql = `UPDATE logbook SET student_no = ?, date = ?, log_description = ?, submitted_at = ?  WHERE month = 1`;

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;