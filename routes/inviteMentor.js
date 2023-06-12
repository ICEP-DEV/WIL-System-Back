const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/mentor', (req,res,next)=>{
   
    const values = [     
     req.body.mentor_Id,
     req.body.student_no,
     req.body.title,
     req.body.m_name,
     req.body.m_surname,
     req.body.email_address,
     req.body.mobileNo,
    ]

    const sql = `INSERT INTO mentor (mentor_Id, title, m_name, m_surname,
        email_address, mobileNo) VALUES (?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})


module.exports = router;
