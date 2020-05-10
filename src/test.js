#!/usr/bin/env node

const Blynk = require('/home/dmgreen/node_modules/blynk-library');  // Links variable 'Blynk' to the Blynk Library
var Generator = require('/usr/opt/generator/generatorcontrol');
const AUTH = 'a4zZ-k1o0Wy46tlNg7MMYwLgXASVNi6J';  // Your top secret auth code
const blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient()
});


const BLYNK_RED = "#D3435C";
const BLYNK_GREEN = "#23C48E";

var process = require('child_process'); // Allows this script to run CLI commands

//Generator.checkifstarted();
// ----- RPi Reboot Command -----
var RPiReboot = new blynk.VirtualPin(20);  // Setup Reboot Button
var StateLabel = new blynk.VirtualPin(0);
//RPiReboot.on('write', function(param){
 // console.log('RPIReboot:', param);
 // blynk.setProperty(RPiReboot, "color", BLYNK_RED);
//});

RPiReboot.on('write', function(param) {  // Watches for V20 Button
  if (param == 1) {  // Runs the CLI command if the button on V20 is pressed
    console.log('RPIReboot:', param);
    Generator.startup();
    blynk.virtualWrite(0, "Running");
    //blynk.setProperty('RPiReboot', "onBackColor", "#D3435C");
    blynk.setProperty('StateLabel', "onBackColor", "#D3435C");
  
}
else {
  console.log('RPIReboot:', param);
  blynk.virtualWrite(0, "Stopped");
 // blynk.setProperty(RPiReboot, "offBackColor", BLYNK_GREEN);
}
});

