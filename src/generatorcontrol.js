#!/usr/bin/env node

// example thread:
//https://www.raspberrypi.org/forums/viewtopic.php?t=172499




var wpi = require('./node_modules/node-wiring-pi');

wpi.setup('wpi');

//pins are numbered, wiring diagram  
//pin 11 = WPi Pin 0 orange to relay in1
//pin 13 = WPi Pin 2 yellow to relay in2
//pin 15 = WPi Pin 3 purple to 3.3v power
//pin2 - 5V to VCC on relay for power
//pin 9 is GND

var wpifuelpin = 0;
var wpistarter = 2;
var wpidetectstart = 3;

wpi.pinMode(wpifuelpin, wpi.OUTPUT);
wpi.pinMode(wpistarter, wpi.OUTPUT);
wpi.pinMode(wpidetectstart, wpi.INPUT);

wpi.pullUpDnControl(wpidetectstart, wpi.PUD_DOWN);




 //function to start fuel solenoid
exports.startfuel = function () {
    switchon(wpifuelpin);
    
     };
   //function to start starter motor
 exports.startengine = function () {
     switchon(wpistarter);
 }   

//stop engine
 exports.shutdown = function (){
     switchoff(wpifuelpin);

 }
  // start engine
 exports.startup = function() {
      switchon(wpifuelpin);
      switchon(wpistarter);
      // wait 6 seconds then turn off starter circut
      sleep(6000).then(() => { switchoff(wpistarter); });
      //wait 10 seconds, then check for engine successful start
      
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
        console.log('Generator Started');
        return true;
       }
        else {
          console.log("start failed");
            return false; }

    }
