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
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'Workintergratedlearning@outlook.com',
      pass: "wil@2023"
    },
    
  });
  /*var transporter = nodemailer.createTransport({
    service: 'Outlook',
    auth: {
      user: 'e-Voting@outlook.com',
      pass: '@eVoting2019'
    }
  });*/

  const emailMessage = {
    from: 'Workintergratedlearning@outlook.com',
    to: '216430646@tut4life.ac.za',
    subject: 'Query Results',
    text: this.student_no + ' invites you to be their mentor.',
    html: emailTemplate({ results: req.body.queryResults }),
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





/*router.post('/pass', (req, res, next) => {
    const password = req.body.password;
  
    const values = [
      password
    ];
  
    let sql = `INSERT INTO student (password) VALUES (?)`;
  
    conn.query(sql, values, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("Successfully inserted");
      res.status(200).json({ 'Message': "Success" });
    });
  });*/
