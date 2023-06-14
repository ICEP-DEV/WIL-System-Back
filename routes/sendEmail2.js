const db = require('../Config/connection');
var express = require('express');
var session = require('express-session');
const router = express.Router();
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretOrKey = 'secretKey';
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/Login', function (req, res) {
	const student_id = req.body.student_id;
	const student_password = req.body.student_password;
	if (student_id) {
		//Sending an email
		var transporter = nodemailer.createTransport({
			service: 'Outlook',
			auth: {
				user: 'Workintergratedlearning@outlook.com',
				pass: 'wil@2023'
			}
		});
		const OTPSent = randomstring.generate({
			length: 4,
			charset: 'numeric'
		});
		var mailOptions = {
			from: 'Workintergratedlearning@outlook.com',
		    to: '216430646@tut4life.ac.za',
			subject: 'Testing',
			text: 'invite mentor'
		};
		transporter.sendMail(mailOptions, function (err, res, info) {
			if (err) {
				console.log(err);
			} else {
				console.log(mailOptions);
				console.log('Email sent: ' + info.res)
				res.json({
					data: res,
					status: 200,
					message: "A pin has been sent to your TUT4LIFE account."
				})
			}
		})
	}
});

module.exports = router;

