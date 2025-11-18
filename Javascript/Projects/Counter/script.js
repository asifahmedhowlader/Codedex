const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
let display = 0;

let increaseCount = () => {
  count.innerHTML = display++;
};
let decreaseCount = () => {
  count.innerHTML = display--;
};
let resetCount = () => {
  display = 0;
  count.innerHTML = display;
};
increase.addEventListener("click", increaseCount);
decrease.addEventListener("click", decreaseCount);
reset.addEventListener("click", resetCount);
