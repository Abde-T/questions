const displayCount = document.querySelector(" .count");
let count = 0;

function addCount() {
  displayCount.innerHTML = count++;
  if (count > 0) {
    displayCount.style.color = "green";
  }
}
function lowerCount() {
  displayCount.innerHTML = count--;
  if (count < 0) {
    displayCount.style.color = "red";
  }
}

