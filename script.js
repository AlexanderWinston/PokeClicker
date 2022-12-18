const countElement = document.getElementById("count");
let count = 0;
countElement.innerText = "Pokéball Count:" + count;
function increaseCount() {
  count++;
  countElement.innerText = "Pokéball Count:" + count;
}
