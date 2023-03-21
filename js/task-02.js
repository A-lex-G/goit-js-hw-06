const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const elementOfList = document.createElement("li");

  elementOfList.textContent = ingredient;

  elementOfList.classList.add("item");

  return elementOfList;
});

list.append(...elements);

console.log(list);
