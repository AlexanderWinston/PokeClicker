const countElement = document.getElementById("count");

let count = 50;
let counter = 1

countElement.innerText = "Pokéballs Owned:" + count;

function increaseCount() {
  count = count + counter;
  countElement.innerText = "Pokéballs Owned:" + count;
}

function increaseCountLure() {
  if (count >= 50){
    count = count - 50
   counter+=2;
  countElement.innerText = "Pokéballs Owned:" + count;
  }
}

