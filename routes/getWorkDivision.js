const express = require('express');
const conn = require('../config/db');
const router = express.Router();


router.get('/getWorkInfo', (req, res, next) => {
  let sql = 'SELECT companyName, province, address, departmentName, role FROM workdivision';
  conn.query(sql, (err,result)=>{
    if(err) throw err;
    res.status(200).json({result});

     });
});

module.exports = router;