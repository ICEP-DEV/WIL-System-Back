const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/emailNotify', (req, res, ext) => {
   
    const values = [
     req.body.email_Id,
     req.body.title,
     req.body.description,
     req.body.dateReceived,
     req.body.stud_No,
    ]

    let sql = `INSERT INTO emailNotification (email_Id, title,
        description, dateReceived, stud_No) VALUES (?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;