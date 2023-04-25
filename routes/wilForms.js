const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/forms', (req,res,next)=>{
   
    const values = [
     req.body.approvedEmployer,
     req.body.contactPerson,
     req.body.email,
     req.body.address,
     req.body.city,
     req.body.postalCode,
     req.body.studyPeriod,
    ]

    let sql = `INSERT INTO placement (approvedEmployer,contactPerson, 
               email, address, city, postalCode, studyPeriod) VALUES (?,?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

router.post('/office', (req, res, next) => {
    const values = [
        req.body.officeId,
        req.body.capturedBy,
        req.body.signature,
        req.body.date,   
       ]

    let sql2 = `INSERT INTO office (officeId,capturedBy, signature, date)
                VALUES (?,?,?,?)`
    
        conn.query(sql2, values, function(err, result){
            if(err)throw err;
                console.log("Successfully inserted")
        })

        res.status(200).json({'Message' :"Success"});
});

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
