const express = require('express')
const conn = require('../config/db')
const router = express.Router()

router.post('/workInfo', (req,res,next)=>{
   
    const values = [     
     req.body.student_no,
     req.body.companyName,
     req.body.departmentName,
     req.body.role,
     req.body.province,
     req.body.city,
     req.body.suburb,
     req.body.address
    ]

    const sql = `INSERT INTO workdivision (student_no, companyName, role, departmentName, province, city,
        suburb, address) VALUES (?,?,?,?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
});


module.exports = router;