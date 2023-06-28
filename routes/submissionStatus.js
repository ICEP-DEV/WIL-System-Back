const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.post('/status', (req, res) => {
  
  const values = [
    req.body.month1,
    req.body.month2,    
    req.body.month3,
    req.body.month4,
    req.body.month5,
    req.body.month6,
    req.body.month7,    
]

    let sql = `INSERT INTO monthly_status (month1, month2, month3, month4, month5, month6) 
    VALUES (?, ?, ?, ?, ?, ?)`;

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
});


module.exports = router;
