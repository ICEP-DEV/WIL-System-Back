const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/notify', (req, res, ext) => {
   
    const values = [
     req.body.notification_Id,
     req.body.stud_No,
     req.body.name,
     req.body.date,
     req.body.dueDate,
    ]

    let sql = `INSERT INTO notifications (notification_Id, stud_No,
        name, date, dueDate) VALUES (?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})

module.exports = router;