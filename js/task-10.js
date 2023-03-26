function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#controls");
let inputEl = container.firstElementChild;
const buttons = document.querySelectorAll("#controls button");
const targetContainer = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  let size = 30;
  for (let amount = 0; amount < Number(inputEl.value); amount += 1) {
    const innerContainer = document.createElement("div");
    size += 10;
    innerContainer.style.width = size + "px";
    innerContainer.style.height = size + "px";
    innerContainer.style.backgroundColor = getRandomHexColor();
    targetContainer.append(innerContainer);
  }
}
destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  targetContainer.innerHTML = "";
}
