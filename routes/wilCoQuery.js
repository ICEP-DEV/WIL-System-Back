const express = require('express')
const conn = require('../config/db')
const router = express.Router()

router.post('/regQuery', (req,res, next)=>{
   
    const values = [
     req.body.wilCoord_id,
     req.body.queryMessage,    
    ]

    let sql = `INSERT INTO wilcoquerys (wilCoord_id , queryMessage) VALUES (?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
});


module.exports = router;