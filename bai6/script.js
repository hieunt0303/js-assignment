import { categories } from "./bai6-data.js";

console.log(categories);

const parent1 = categories[0];
const parent2 = categories[1];
const parent3 = categories[2];
const megamenu = document.getElementById("megamenu");
let list1 = "";
let list2 = "";

parent1.forEach((element) => {
  list1 += `<li >${element.cat_name}<ul id="p${element.id}"></ul></li>`;
});

megamenu.innerHTML = `<ul>${list1}</ul>`;

parent2.forEach((element) => {
  const elementParent1 = document.getElementById(`p${element.parent_id}`);
  elementParent1.innerHTML += `<li id="p${element.id}">${element.cat_name}<ul id="q${element.id}"></ul></li>`;
});

parent3.forEach((element) => {
  const elementParent1 = document.getElementById(`q${element.parent_id}`);
  elementParent1.innerHTML += `<li id="p${element.id}">${element.cat_name}<ul id="s${element.id}"></ul></li>`;
});

