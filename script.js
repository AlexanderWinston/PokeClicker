const countElement = document.getElementById("count");
const amountOwnedLure = document.getElementById("ownedLure")

let count = 50;
let counter = 1;
let ownedLure = 0;
countElement.innerText = "Pokéballs Owned:" + count;

function increaseCount() {
  count = count + counter;
  countElement.innerText = "Pokéballs Owned:" + count;
}

function increaseCountLure() {
  if (count >= 50){
    count = count - 50
    counter+=2;
    ownedLure++;
    amountOwnedLure.innerText = "Owned:" + ownedLure; 
    countElement.innerText = "Pokéballs Owned:" + count;
  }
}

