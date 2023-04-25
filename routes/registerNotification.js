const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer")
const conn = require('../config/db')
const router = express.Router()


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "silence.tshifhinga.18@gmail.com",
        pass: "Tshifhi@123"
    },
    tls: {
        rejectUnauthorized: false,
    },
});

let mailOptions = {
    from: "silence.tshifhinga.18@gmail.com",
    to: "216430646@tut4life.ac.za",
    subject: "testing",
    text: "programing is good"
}

transporter.sendMail(mailOptions, function(err, Success){
    if(err){
        console.log(err)
    } else{
        console.log("Email sent successfully!")
    }
})

/*router.post('/emailNotify', (req, res, ext) => {
   
    const values = [
     req.body.email_Id,
     req.body.title,
     req.body.description,
     req.body.dateReceived,
     req.body.stud_No,
    ]

    let sql = `INSERT INTO registerNotification (email_Id, title,
        description, dateReceived, stud_No) VALUES (?,?,?,?,?)`

    conn.query(sql, values, function(err, result){
        if(err)throw err;
            console.log("Successfully inserted")
    })

    res.status(200).json({'Message' :"Success"});
})*/

module.exports = router;