const express = require('express')
const nodemailer = require("nodemailer")
const conn = require('../config/db')
const router = express.Router()


let studNum;

router.get('/studNum/:studentNo', (req, res, next) => {
  studNum = req.params.studentNo;
});

function emailTemplate(data) {
  return `
    <html>
      <body>
        <h1>Query Results</h1>
        <p>${data.results}</p>
      </body>
    </html>
  `;
}

router.post('/sendEmail', (req, res, next) => {
    console.log(req.body)
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: 'Workintergratedlearning@outlook.com',
      pass: "wil@2023"
    },
    
  });


  const options = {
    from: 'Workintergratedlearning@outlook.com',
    to: '216430646@tut4life.ac.za',
    subject: 'Query Results',
    text: this.student_no + ' invites you to be their mentor.',
    //html: emailTemplate({ results: req.body.queryResults }),
  };

  transporter.sendMail(emailMessage, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

module.exports = router;
