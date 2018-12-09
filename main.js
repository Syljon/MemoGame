const deck = document.querySelectorAll(".card");
const flipstext = document.querySelector("#flipstext");
let flips = 0;
deck.forEach(card => {
  const pos = Math.floor(Math.random() * 12);
  card.style.order = pos;
  card.addEventListener("click", clickHandle);
});
let selected = [];
let couple = 0;
function clickHandle(e) {
  console.log(e.target.value);
  selected.push(e.target);
  e.target.style.backgroundColor = e.target.value;
  if (selected.length >= 2) {
    Match();
  }
}

function Match() {
  flips++;
  flipstext.innerText = flips;
  if (selected[0].value == selected[1].value) {
    console.log("Match");
    selected.pop().disabled = true;
    selected.pop().disabled = true;
    couple++;
  } else {
    console.log("Not Match");
    setTimeout(() => {
      selected.pop().style.backgroundColor = "#1f3c88";
      selected.pop().style.backgroundColor = "#1f3c88";
    }, 500);
  }
  if (couple >= 6) {
    console.log("Win");
  }
}
