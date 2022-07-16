import countries from "./countries.js";
console.log(countries);

import { webTechs } from "./web_techs.js";
console.log(webTechs);

let index1 = countries.indexOf("Ethiopia");
if (index1 === -1) {
  console.log(countries.push("Ethopia"));
} else {
  console.log(countries[index1].toUpperCase());
}

webTechs.push("Sass");
console.log(webTechs);

countries.splice(3, 1);
console.log(countries);
