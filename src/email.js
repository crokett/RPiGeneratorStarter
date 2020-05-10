#!/usr/bin/env node

var nodemailer = require('nodemailer');
var mailOptions;

var username;
var password;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: username,
    pass: password
  }
});


exports.setCredentials = function (user, passwd)
{
   username = user;
   pass = passwd;
}

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