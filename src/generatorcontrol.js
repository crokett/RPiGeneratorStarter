#!/usr/bin/env node

// example thread:
//https://www.raspberrypi.org/forums/viewtopic.php?t=172499

var Gpio = require('/home/dmgreen/node_modules/onoff').Gpio; //include onoff to interact with the GPIO
var wpi = require('/home/dmgreen/node_modules/node-wiring-pi');

wpi.setup('wpi');

const fuelsolenoid = new Gpio(17, 'out');
const starter = new Gpio(27, 'out');
const detectstartout = new Gpio(5, 'out');
const detectstartin = new Gpio(6, 'in', Gpio.LO);

var wpifuelpin = 0;
var wpistarter = 2;
var wpidetectstart = 3;

wpi.pinMode(wpifuelpin, wpi.OUTPUT);
wpi.pinMode(wpistarter, wpi.OUTPUT);
wpi.pinMode(wpidetectstart, wpi.INPUT);

wpi.pullUpDnControl(wpidetectstart, wpi.PUD_DOWN);

//pins are numbered
//2 4 6 8 10 12 14
//1 3 5 7 9  11 13 ... 29 31   
//pin 11 = GPIO 17, WPi Pin 0 orange to in1
//pin 13 = GPIO 27, WPi Pin 2 yellow to in2
//pin 15 = GPIo 22, WPi Pin 3 purple to 3.3v power
//pin2 - 5V to VCC on relay for power
// pin 9 is GND

//pin 29 = GPIO 5
//pin 31 = GPIO6



exports.startfuel = function () {
    switchon(wpifuelpin);
     //function to start fuel solenoid
     };
  
 exports.startengine = function () {
     switchon(wpistarter);
 }   

 exports.shutdown = function (){
     switchoff(wpifuelpin);

 }
  
 exports.startup = function() {
      switchon(wpifuelpin);
      switchon(wpistarter);
      // wait 6 seconds then turn off starter circut
      sleep(6000).then(() => { switchoff(wpistarter); });

 }

  function switchon(pinnum){
        changepinstate(pinnum, 1);
     
      }
   function switchoff(pinnum){
       changepinstate(pinnum, 0);
   }

   function changepinstate(pinnum, state){
       wpi.digitalWrite(pinnum, state);

   }

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.checkifstarted = function checkforstart() { 

       if (wpi.digitalRead(wpidetectstart) == 1){
        //console.log('Generator Started');
        return true;
       }
        else {//console.log("start failed");
            return false; }
          
     // if (detectstartin.readSync() == Gpio.HIGH) { //check the pin state, if the state is 1 (or off)
      // console.log('Generator Started');
       //  return true}
     // else {console.log("start failed");
          ///  return false};
    }