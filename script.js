/*
also ex
*/

/*
const keyA2 = document.querySelector("#A2");
keyA2.onclick = (e) => {
  console.log("ding")
}
*/

/* click stuff
const keys = document.querySelectorAll("div");
keys.forEach((key, i) => {
  key.onclick = (e) => {
    console.log("ding", i)
  }
});
*/

/* event listener popular this how work */
/* keydown is the event type
  event is the event
  and if statement checks the key
*/
/* credit for this function thing: https://javascript.info/keyboard-events */

window.addEventListener("keydown", function(event){
  if (event.code === "KeyA") {
    text = "wow it worked";
  } if (event.code === "KeyS") {
    text = "you pressed s";
  } if (event.code === "KeyD") {
    text = "the d key wow";
  } if (event.code === "KeyF") {
    text = "ayyyy";
  } if (event.code === "KeyG") {
    text = "wow, the g key";
  } if (event.code === "KeyH") {
    text = "h";
  } if (event.code === "KeyJ") {
    text = "the j key wow";
  } if (event.code === "KeyK") {
    text = "What are these outputs anymore";
  } if (event.code === "KeyL") {
    text = "Imagine forgetting the black keys";
  } if (event.code === "Semicolon") {
    text = "I didn't forget, definitely";
  } if (event.code === "KeyW") {
    text = "achoo";
  } if (event.code === "KeyE") {
    text = "E";
  } if (event.code === "KeyT") {
    text = "tea time";
  } if (event.code === "KeyY") {
    text = "Yay";
  } if (event.code === "KeyU") {
    text = "U is for you and me";
  } if (event.code === "KeyO") {
    text = "Owo";
  } if (event.code === "KeyP") {
    text = "pp haha funny letter";
  }
  document.getElementById("demo").innerHTML = text;
})

/* credit for this function: https://www.w3schools.com/graphics/game_sound.asp */
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

/*
useful stuff https://www.w3schools.com/jsref/event_key_keycode.asp
*/