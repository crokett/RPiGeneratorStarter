//#!/usr/bin/env node

var mail = require('/usr/opt/generator/email');

const SEND = "crokett@gmail.com";
const RECEIVE = "allankgreen@gmail.com";

mail.setOptions(SEND,RECEIVE, "from Node.js on a Pi", "hello from a Pi! My favorite flavor is raspberry");
mail.sendMail();