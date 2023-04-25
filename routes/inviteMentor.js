const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/mentor', (req,res,next)=>{
   
    const values = [
     req.body.mentor_Id,
     req.body.surname,
     req.body.initials,
     req.body.email,
     req.body.password,
     req.body.company_Id,
    ]

    const sql = `INSERT INTO mentor (mentor_Id,surname, initials,
                email, password, company_Id) VALUES (?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

router.post('/company', (req,res,next)=>{
   
    const values = [
     req.body.company_Id,
     req.body.name,
     req.body.address,
     req.body.email,
     req.body.telephone
    ]

    const sql = `INSERT INTO company (company_Id, name, address,
                email, telephone) VALUES (?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

router.post('/invitation', (req,res,next)=>{
   
    const values = [
     req.body.invite_Id,
     req.body.platform_Id,
     req.body.date,
     req.body.link
    ]

    const sql = `INSERT INTO invitation (invite_Id, platform_Id, date,
        link) VALUES (?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;
