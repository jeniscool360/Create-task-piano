// resource for how to do key events: https://javascript.info/keyboard-events
// resource for how to do a list or array credit: https://stackoverflow.com/questions/30289217/how-do-i-loop-through-a-javascript-array-of-audio-files and https://code-boxx.com/play-audio-javascript/
// audio credit: https://freesound.org/people/pinkyfinger/

var audio = new Audio();
var notes = [
  "a5.wav",
  "aSharp5.wav",
  "b5.wav",
  "c5.wav",
  "cSharp5.wav",
  "d5.wav",
  "dSharp5.wav",
  "e5.wav",
  "f5.wav",
  "fSharp5.wav",
  "g5.wav",
  "gSharp5.wav"
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
  } if (event.code === "KeyK") {
    text = "C";
  } if (event.code === "KeyL") {
    text = "D";
  } if (event.code === "Semicolon") {
    text = "E";
  } if (event.code === "KeyW") {
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
  } if (event.code === "KeyO") {
    text = "C#";
  } if (event.code === "KeyP") {
    text = "D#";
  }
  document.getElementById("pianoNote").innerHTML = text;
})