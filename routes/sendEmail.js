const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { from, to, subject, content } = req.body;
  
    const transporter = nodemailer.createTransport({
      //service: 'YourEmailServiceProvider',
      host: 'smtp.office365.com',
        port: 587,
        secure: false,
      auth: {
        user: '',
        pass: ''
      }
    });
  
    const mailOptions = {
      from,
      to,
      subject,
      text: content
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email.' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully.' });
      }
    });
  });
  
  const port = 5000; // or any other port of your choice

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


/*            user: 'Workintergratedlearning@outlook.com',
            pass: "wil@2023"*/
