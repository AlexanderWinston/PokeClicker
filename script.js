const countElement = document.getElementById("count");

let count = 0;

countElement.innerText = "Pokéball Count:" + count;

function increaseCount() {
  count++;
  countElement.innerText = "Pokéball Count:" + count;
}

function increaseCountLure() {
  if (count >= 50){
  count++;
  countElement.innerText = "Pokéball Count:" + count;
  }
}