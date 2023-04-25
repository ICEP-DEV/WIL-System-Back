const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/admForms', (req,res,next)=>{
   
    const values = [
     req.body.semester,
     req.body.finacialAid,
     req.body.campus,
     req.body.appYear,

    ]

    let sql = `INSERT INTO placement (semester,finacialAid, 
        campus, appYear) VALUES (?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;