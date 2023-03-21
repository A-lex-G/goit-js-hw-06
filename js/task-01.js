const categoriesArray = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach((category) => {
  console.dir(`Category: ${category.firstElementChild.textContent}`);

  const innerArray = category.lastElementChild;
  console.log(`Elements: ${innerArray.children.length}`);
});
