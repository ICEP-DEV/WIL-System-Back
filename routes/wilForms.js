const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/forms', (req,res, next)=>{
   
    const values = [
     req.body.wilForm_Id,
     req.body.student_no,    
     req.body.approvedEmployer,
     req.body.contactPerson,
     req.body.telNumber,
     req.body.emp_email,
     req.body.physicalAddress,
     req.body.postalAddress,
     req.body.postalCode,
     req.body.city,
     req.body.studyPeriod,
    ]

    let sql = `INSERT INTO wilform (wilForm_Id, student_no, approvedEmployer, contactPerson, telNumber,
        emp_email, physicalAddress, postalAddress, postalCode, city, studyPeriod) VALUES (?,?,?,?,?,?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})



module.exports = router;
