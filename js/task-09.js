function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const backGround = document.body;

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  colorName.textContent = getRandomHexColor();
  backGround.style.backgroundColor = colorName.textContent;
}
