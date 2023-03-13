const express = require('express')
const conn = require('../config/db')
const router = express.Router()

router.get('./forms', (res, req, next) => {
    let sql = " SELECT * from student, course, department"
    conn.query(sql, (err,result)=>{
        if(err) throw err;
        res.status(200).json({result});
    })
})
