const express = require('express');
const { response } = require('express');
const nodemailer = require("nodemailer");
const conn = require('../config/db');
const router = express.Router();

function sendEmail() {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'silence.tshifhinga.18@gmail.com',
        pass: "kdiiimtfqvrjgcue"
      }
    });

    const mail_configs = {
      from: 'silence.tshifhinga.18@gmail.com',
      to: '216430646@tut4life.ac.za',
      subject: 'Query Results',
      text: 'invites you to be their mentor.'
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      } else {
        return resolve({ message: "Email sent successfully" });
      }
    });
  });
}

router.post('/send', (req, res) => {
  sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message));
});

module.exports = router;


/*            user: 'Workintergratedlearning@outlook.com',
            pass: "wil@2023"*/