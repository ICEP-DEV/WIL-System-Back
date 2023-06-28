const db = require('../Config/connection');
var express = require('express');
var session = require('express-session');
const router = express.Router();
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretOrKey = 'secretKey';
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/Login', function (req, res) {
	
		//Sending an email
		var transporter = nodemailer.createTransport({
			service: 'Outlook',
			auth: {
				user: 'Workintergratedlearning@outlook.com',
				pass: 'wil@2023'
			}
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
	
});

module.exports = router;

