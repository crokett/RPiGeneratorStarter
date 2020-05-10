#!/usr/bin/env node

var nodemailer = require('nodemailer');
var mailOptions;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'username'
    pass: 'passsword'
  }
});

exports.setOptions = function (fromaddr, toaddr, subject, msg){
 mailOptions = {
  from: fromaddr,
  to: toaddr,
  subject: subject,
  text: msg
 }
}



exports.sendMail = function () {
    transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}

); }