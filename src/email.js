#!/usr/bin/env node

var nodemailer = require('nodemailer');
var mailOptions;

const SEND = "crokett@gmail.com";
const RECEIVE = "crokett@gmail.com";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'crokett@gmail.com',
    pass: 'bgkectwyaybiajnh'
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