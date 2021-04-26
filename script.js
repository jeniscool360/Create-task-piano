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