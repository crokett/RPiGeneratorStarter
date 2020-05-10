#!/usr/bin/env node

// To use this script
// Create a Blynk App with a button connected to Virtual I/O pin 20
// and a lael connected to Virtual I/O Pin 0
// get the auth codes and update the AUITH constant with your auth code
// start the script on your Pi (or any test system with nodejs)
// when you tap the button on the App, your console should log a message and the label text will change
// Happy Blynking!

const Blynk = require('../src/node_modules/blynk-library');  // Links variable 'Blynk' to the Blynk Library
const AUTH = <authcode>';  // Your top secret auth code
const blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient()
});
const BLYNK_RED = "#D3435C";
const BLYNK_GREEN = "#23C48E";

var process = require('child_process'); // Allows this script to run CLI commands

// ----- RPi Test Command -----
var RPiTest = new blynk.VirtualPin(20);  // Setup Reboot Button
var StateLabel = new blynk.VirtualPin(0);
  console.log('RPiTest:', param);

RPiTest.on('write', function(param) {  // Watches for V20 Button
  if (param == 1) {  // Runs the CLI command if the button on V20 is pressed
    console.log('RPITest:', param);
    blynk.virtualWrite(0, "Running");
  
}
else {
  console.log('RPiTest:', param);
  blynk.virtualWrite(0, "Stopped");
}
});

