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
  }
  document.getElementById("demo").innerHTML = text;
})

/*
useful stuff https://www.w3schools.com/jsref/event_key_keycode.asp
*/