const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/admForm', (req,res,next)=>{
   
    const values = [
     req.body.adm_Id , 
     req.body.student_no,  
     req.body.firstChoice,
     req.body.enrollType,
     req.body.finacialAid,
     req.body.campus

    ]

    let sql = `INSERT INTO admissionform (adm_Id, student_no, firstChoice, 
        enrollType, finacialAid, campus) VALUES (?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;