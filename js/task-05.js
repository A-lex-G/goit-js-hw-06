// let input = document.querySelector("#name-input");
// let output = document.querySelector("#name-output");

// input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   output.textContent = event.currentTarget.value;
// }

// console.log(input);
// console.log(output);

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
