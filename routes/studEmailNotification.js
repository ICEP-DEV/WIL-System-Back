/* const express = require('express')
const bodyParser = require('body-parser')
const conn = require('../config/db')
const router = express.Router()
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')

// Define your email template using Handlebars
const emailTemplate = handlebars.compile(`
    <h1>Query Results</h1>
    <p>Here are the results of your query:</p>
    <ul>
        {{#each results}}
            <li>{{this}}</li>
        {{/each}}
    </ul>
`);

// Define your query and retrieve the data
async function getQueryResults() {
    const connection = await mysql.createConnection(conn);
    const [rows] = await connection.execute('SELECT * FROM student');
    await connection.end();
    return rows.map(row => row.column_name);
}
const queryResults = await getQueryResults();

// Create a nodemailer transporter using your email provider's API settings
const transporter = nodemailer.createTransport({
    host: 'smtp.tut4life.ac.za',
    port: 587,
    secure: false,
    auth: {
        user: '216433346@tut4life.ac.za',
        pass: 'silence'
    }
});

// Define your email message
const emailMessage = {
    from: '216430646@tut4life.ac.za',
    to: 'silenceTM@outlook.com',
    subject: 'Query Results',
    html: emailTemplate({ results: queryResults })
};

transporter.sendMail(emailMessage, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
module.exports = router; */


const express = require('express');
const nodemailer = require('nodemailer');
const conn = require('../config/db');
const router = express.Router();
const bodyParser = require('body-parser');
const handlebars = require('handlebars');

const app = express();
app.use(express.json());

// Define your email template using Handlebars
const emailTemplate = handlebars.compile(`
    <h1>Query Results</h1>
    <p>Here are the results of your query:</p>
    <ul>
        {{#each results}}
            <li>{{this}}</li>
        {{/each}}
    </ul>
`);

      // Define your query and retrieve the data
async function getQueryResults() {
  const connection = await mysql.createConnection(conn);
  const [rows] = await connection.execute('SELECT * FROM student');
  await connection.end();
  return rows.map(row => row.column_name);
}
const queryResults = await getQueryResults();

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
      from: '',
      to: '',
      subject: '',
      html: emailTemplate({ results: queryResults })
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