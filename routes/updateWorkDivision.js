const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()


let studNum;
router.patch('/updateWorkDiv/:student_no', (req,res, next)=>{
   
    studNum = req.params.student_no;
    companyName = req.body.companyName;
    departmentName = req.body.departmentName;
    role = req.body.role;
    province =req.body.province;
    city = req.body.city;
    suburb = req.body.suburb;
    address = req.body.address;


    const sql = `UPDATE workdivision SET 
    companyName = ?,
    departmentName = ?,
    role = ?,
    province = ?,
    city = ?,
    suburb = ?,
    address = ?
    WHERE student_no = ?`;

    conn.query(sql, [companyName,departmentName,role,province,city,suburb,address,studNum], function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})



module.exports = router;
