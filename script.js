/*
event listener popular this how work
keydown is the event type
event is the event
and if statement checks the key
*/
/* credit for this function thing: https://javascript.info/keyboard-events */

var cMajor = new Audio("piano-c_C_major.wav");

window.addEventListener("keydown", function(event){
  if (event.code === "KeyA") {
    text = "C";
    cMajor.play();
  } if (event.code === "KeyS") {
    text = "D";
  } if (event.code === "KeyD") {
    text = "E";
  } if (event.code === "KeyF") {
    text = "F";
  } if (event.code === "KeyG") {
    text = "G";
  } if (event.code === "KeyH") {
    text = "A";
  } if (event.code === "KeyJ") {
    text = "B";
  } if (event.code === "KeyK") {
    text = "C";
  } if (event.code === "KeyL") {
    text = "D";
  } if (event.code === "Semicolon") {
    text = "E";
  } if (event.code === "KeyW") {
    text = "C#";
  } if (event.code === "KeyE") {
    text = "D#";
  } if (event.code === "KeyT") {
    text = "F#";
  } if (event.code === "KeyY") {
    text = "G#";
  } if (event.code === "KeyU") {
    text = "A#";
  } if (event.code === "KeyO") {
    text = "C#";
  } if (event.code === "KeyP") {
    text = "D#";
  }
  document.getElementById("demo").innerHTML = text;
})

// credit for this function: https://www.w3schools.com/graphics/game_sound.asp
/* not gonna use this yet
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
  }
}
*/
// this where it from woohoo https://code-boxx.com/play-audio-javascript/
// (A) CREATE AUDIO OBJECT

 
// (B) PLAY WHEN READY
// USE "canplaythrough" TO WAIT FOR 100% LOAD
// cMajor.addEventListener("canplay", evt => {
//   console.log("ready to play");
//   cMajor.play();
//   window.addEventListener("keydown", evt => {
//     console.log("play sound");
//     cMajor.play();
//   });
// });

/*
useful stuff https://www.w3schools.com/jsref/event_key_keycode.asp
*/