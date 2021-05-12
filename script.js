/*
event listener popular this how work
keydown is the event type
event is the event
and if statement checks the key
*/

// credit for keyboard function: https://javascript.info/keyboard-events
// list or array credit: https://stackoverflow.com/questions/30289217/how-do-i-loop-through-a-javascript-array-of-audio-files and https://code-boxx.com/play-audio-javascript/
// audio credit: https://freesound.org/people/pinkyfinger/

var audio = new Audio();
var notes = [
  "aMajor.wav",
  "aSharp.wav",
  "bMajor.wav",
  "cMajor.wav",
  "cSharp.wav",
  "dMajor.wav",
  "dSharp.wav",
  "eMajor.wav",
  "fMajor.wav",
  "fSharp.wav",
  "gMajor.wav",
  "gSharp.wav"
];

window.addEventListener("keydown", function(event){
  if (event.code === "KeyA") {
    text = "C";
    audio = new Audio(notes[3]);
    audio.play();
  } if (event.code === "KeyS") {
    text = "D";
    audio = new Audio(notes[5]);
    audio.play();
  } if (event.code === "KeyD") {
    text = "E";
    audio = new Audio(notes[7]);
    audio.play();
  } if (event.code === "KeyF") {
    text = "F";
    audio = new Audio(notes[8]);
    audio.play();
  } if (event.code === "KeyG") {
    text = "G";
    audio = new Audio(notes[10]);
    audio.play();
  } if (event.code === "KeyH") {
    text = "A";
    audio = new Audio(notes[0]);
    audio.play();
  } if (event.code === "KeyJ") {
    text = "B";
    audio = new Audio(notes[2]);
    audio.play();
  } /*if (event.code === "KeyK") {
    text = "C";
  } if (event.code === "KeyL") {
    text = "D";
  } if (event.code === "Semicolon") {
    text = "E";
  }*/ if (event.code === "KeyW") {
    text = "C#";
    audio = new Audio(notes[4]);
    audio.play();
  } if (event.code === "KeyE") {
    text = "D#";
    audio = new Audio(notes[6]);
    audio.play();
  } if (event.code === "KeyT") {
    text = "F#";
    audio = new Audio(notes[9]);
    audio.play();
  } if (event.code === "KeyY") {
    text = "G#";
    audio = new Audio(notes[11]);
    audio.play();
  } if (event.code === "KeyU") {
    text = "A#";
    audio = new Audio(notes[1]);
    audio.play();
  } /*if (event.code === "KeyO") {
    text = "C#";
  } if (event.code === "KeyP") {
    text = "D#";
  }*/
  document.getElementById("demo").innerHTML = text;
})

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