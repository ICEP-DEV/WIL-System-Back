const express = require('express')
const conn = require('../config/db')
const router = express.Router()

router.post('/wilQuery', (req,res, next)=>{
   
    const values = [
    
     req.body.queryMessage, 
     req.body.wilCoord_id,   
    ]

    let sql = `INSERT INTO wilcoquerys  (queryMessage, wilCoord_id) VALUES (?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
});


module.exports = router;