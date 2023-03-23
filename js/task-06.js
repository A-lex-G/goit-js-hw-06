const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("focus", onInputFocus);
inputEl.addEventListener("blur", onInputBlur);

function onInputFocus() {}
function onInputBlur() {
  if (
    inputEl.value.length === Number(inputEl.dataset.length) &&
    inputEl.classList.contains("invalid")
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
}
