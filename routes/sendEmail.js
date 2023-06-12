const { response } = require('express')
const express = require('express')
const nodemailer = require("nodemailer")
const conn = require('../config/db')
const router = express.Router()

function sendEmail(){
    return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'silence.tshifhinga.18@gmail.com',
            pass: "mely xdbq lffa nvhf"
          }

    })
    



const mail_configs = {
    from: 'silence.tshifhinga.18@gmail.com',
    to: '216430646@tut4life.ac.za',
    subject: 'Query Results',
    text:' invites you to be their mentor.',
    //html: emailTemplate({ results: req.body.queryResults }),
  }

  transporter.sendMail(mail_configs, function (error, info) {
    if (error) {
      console.log(error);
      //res.status(500).json({ message: 'Failed to send email' });
      return reject({message: `An error has occured`})
    } else {
        return resolve({message: "Email sent successfully"}) 
      //console.log('Email sent: ' + info.response);
      //res.status(200).json({ message: 'Email sent successfully' });
    }
  })

})
}

router.post('/send', (req, res) => {
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(8080).send(error.message))
})



module.exports = router;

/*            user: 'Workintergratedlearning@outlook.com',
            pass: "wil@2023"*/