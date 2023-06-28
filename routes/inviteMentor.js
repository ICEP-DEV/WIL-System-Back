const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()

router.post('/iniviteMentor', (req, res, next) => {

    const values = [
        req.body.mentor_Id,
        req.body.student_no,
        req.body.title,
        req.body.m_name,
        req.body.m_surname,
        req.body.email_address,
        req.body.mobileNo,
    ]

    const sql = `INSERT INTO mentor (mentor_Id, title, m_name, m_surname,
         email_address, mobileNo) VALUES (?,?,?,?,?,?)`

    conn.query(sql, values, function (err, result) {
        if (err) throw err;


        console.log("Successfully inserted")
        current = new Date();
        var month = current.getMonth() + 5
        for (let i = 0; i < 6; i++) {

            if (month > 12) {
                month = 1
            }
            console.log(month)

            const monthlyvalues = [
                NULL,
                req.body.student_no,
                month,
                req.body.status,
                req.body.approval,
            ]

            let data = `INSERT INTO monthly_status (month_Id , student_no, month, status, approval) VALUES (?,?,?,?,?)`
            conn.query(data, monthlyvalues, function (err, result) {
                if (err) throw err;
            });

            month++

        }
    })

    res.status(200).json({ 'Message': "Success" });
})




module.exports = router;
