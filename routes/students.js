require('dotenv').config()
const express = require('express')
const conn = require('../config/db')
const router = express.Router()
const {checkToken} = require("../auth/token_validation")
const {createUser,login,getStudentInfo} = require("../controllers/studentC")




router.post("/", createUser);
router.post("/login", login);
router.get("/", getStudentInfo);



// router.get('/student', (req,res,next)=>{
//     let sql = `Select A.student_no,A.initials, A.surname, B.dep_id,dep_name,c.roles  
//     FROM student A,stud_dep B,responsibility C, department D 
//     WHERE B.dep_id = D.dep_id 
//     AND C.dep_id = D.dep_id 
//     And  A.student_no = B.student_no`;
//     conn.query(sql, (err,result)=>{
//         if(err) throw err;
//         res.status(200).json({result});

//     })
    
// })

module.exports = router;