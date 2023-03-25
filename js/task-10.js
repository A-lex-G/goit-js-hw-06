function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#controls");
let inputEl = container.firstElementChild;
const buttons = document.querySelectorAll("#controls button");
const targetContainer = document.querySelector("#boxes");
const createButton = buttons[0];
const destroyButton = buttons[1];

createButton.addEventListener("click", createBoxes);

function createBoxes(amount) {
  for (let amount = 0; amount < Number(inputEl.value); amount += 1) {
    targetContainer.append(document.createElement("div"));
    targetContainer.firstElementChild.style.width = "30px";
    targetContainer.firstElementChild.style.height = "30px";
    targetContainer.firstElementChild.style.backgroundColor = "teal";
    console.log(targetContainer.firstElementChild.style.width);

    for (let item of targetContainer.children) {
      item.style.width +=
        targetContainer.previousElementSibling.style.width + 10 + "px";
      item.style.height +=
        targetContainer.previousElementSibling.style.height + 10 + "px";
      item.style.backgroundColor = "teal";
    }

    // targetContainer.nextElementSibling.style.width +=
    //   targetContainer.previousElementSibling.style.width + 10 + "px";
    // targetContainer.nextElementSibling.style.height +=
    //   Number.parseInt(targetContainer.previousElementSibling.style.height) +
    //   10 +
    //   "px";
    // targetContainer.nextElementSibling.style.backgroundColor = "teal";
    // console.log(Number.parseInt(targetContainer.lastElementChild.style.width));
    // console.dir(targetContainer);
  }
}
console.dir(inputEl);
console.log(inputEl.value);
console.log(createButton);
console.log(destroyButton);
console.log(buttons);
console.log(buttons[0].dataset);
console.log(buttons[1].dataset);
