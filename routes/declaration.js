const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/declaration', (req,res, next)=>{
   
    const values = [
     req.body.student_no, 
     req.body.signed,   
    ]

    let sql = `INSERT INTO student_declaration (student_no, signed) VALUES (?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})



module.exports = router;