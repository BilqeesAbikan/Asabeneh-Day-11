import { countries_data } from "./countries.mjs";
console.log(countries_data);
let body = document.body;

let header = document.createElement("h1");
let head = document.createElement("h3");
let topic = document.createElement("span");
let author = document.createElement("span");
let container = document.createElement("div");

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(6,1fr)";
container.style.gap = "5px";
container.style.maxWidth = "70%";

body.append(header);
body.append(head);
body.append(topic);
body.append(author);
body.append(container);

body.style.display = "grid";
body.style.placeItems = "center";
body.style.fontFamily = "Roboto";
body.style.margin = "0";
body.style.padding = "0";
// body.style.width = "3rem";
// body.style.height = "2rem";
// body.style.alignItems = "center";
// body.style.marginBottom = "2rem";

header.textContent = "WORLD COUNTRIES LIST";
head.textContent = "Total Numbers of countries: 193";
topic.textContent = "30 Days Of JavaScript:DOM-Day-2";
author.textContent = "Author: Asabeneh Yetayeh";

for (let i = 0; i < countries_data.length; i++) {
  let country = document.createElement("div");
  country.textContent = countries_data[i].name;
  country.fontSize = "15px";
  country.style.textAlign = "center";
  country.style.padding = "30px 0";
  country.style.margin = "5px";
  country.style.boxShadow = "0 2px 8px rgba(0 0 0 / 0.2)";
  container.appendChild(country);
}
