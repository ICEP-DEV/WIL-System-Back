const express = require('express')
const conn = require('../config/db')
const router = express.Router()

router.post('/query', (req,res, next)=>{
   
    const values = [
     req.body.query_Id,
     req.body.student_no,
     req.body.queryMessage,    
    ]

    let sql = `INSERT INTO systemquerys (query_Id, student_no, queryMessage) VALUES (?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
});


module.exports = router;
