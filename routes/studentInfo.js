const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/studInfo', (req,res, next)=>{
   
    const values = [
     req.body.student_no,
     req.body.initials, 
     req.body.name,   
     req.body.surname,
     req.body.gender,
     req.body.email,
     req.body.itsPin,
     req.body.employmentLetter,
     req.body.systemDoc,
    ]

    let sql = `INSERT INTO student (student_no, initials, name, surname,
        gender, email, itsPin, employmentLetter, systemDoc) VALUES (?,?,?,?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;