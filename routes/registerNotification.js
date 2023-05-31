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



module.exports = router;