const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  textEl.style.fontSize = inputEl.value + "px";
}
