const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const elements = images
  .map(({ url, alt }) => `<li><img src = "${url}" alt = "${alt}"></li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", elements);

// ...оформлення галереї флексбоксами або грідами через CSS класи.
list.classList.add("list");

const itemsOfList = document.querySelectorAll("li");
itemsOfList.forEach((element) => {
  element.classList.add("list-item");
});

// list.style.width = "500px";
console.log(list);
