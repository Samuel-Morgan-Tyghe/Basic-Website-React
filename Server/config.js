const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email, // your email address to send email from automatedmessage043@gmail.com
    pass: process.env.password // your gmail account password  HireME247*
  }
});

module.exports = transporter;