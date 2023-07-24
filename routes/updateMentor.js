const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()


let studNum;
router.patch('/updateMentor/:student_no', (req,res, next)=>{
   
    studNum = req.params.student_no;
    title = req.body.title;
    m_name = req.body.m_name;
    m_surname= req.body.m_surname;
    email_address = req.body.email_address;
    mobileNo = req.body.mobileNo;

    const sql = `UPDATE mentor SET 
    title = ?,
    m_name = ?,
    m_surname = ?,
    email_address = ?,
    mobileNo = ?
    WHERE student_no = ?`;

    conn.query(sql, [title,m_name,m_surname,email_address,mobileNo,studNum], function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})



module.exports = router;





/* const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.post('/updateMentor/:studentNo', (req, res, next) => {
    const studentNo = req.params.studentNo;
    const title = req.body.title;
    const m_name = req.body.m_name;
    const m_surname = req.body.m_surname;
    const email_address = req.body.email_address;
    const mobileNo = req.body.mobileNo;

  let sql = `UPDATE mentor SET title = ?, m_name = ?, m_surname = ?, email_address = ?, mobileNo = ? 
  WHERE student_no = ?`;
  conn.query(sql, [title, m_name, m_surname, email_address, mobileNo, studentNo], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result });
  });
});

module.exports = router; */