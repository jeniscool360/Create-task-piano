/*
also ex
*/

/*
const keyA2 = document.querySelector("#A2");
keyA2.onclick = (e) => {
  console.log("ding")
}
*/

const keys = document.querySelectorAll("div");
keys.forEach((key, i) => {
  key.onclick = (e) => {
    console.log("ding", i)
  }
});
/*
document.getElementById("a").onkeypress = function() {myFunction()};

function myFunction() {
  document.getElementById("a").style.backgroundColor = "red";
}
supposed to be for key thing but idk
*/

/*
useful stuff https://www.w3schools.com/jsref/event_key_keycode.asp
*/