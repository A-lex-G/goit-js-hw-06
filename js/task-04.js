let counterValue = 0;

const value = document.querySelector("#value");
const subButton = document.querySelector('button[data-action="decrement"]');
const addButton = document.querySelector('button[data-action="increment"]');

subButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

addButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
