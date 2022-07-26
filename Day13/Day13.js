import { countries } from "./countries.mjs";

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// console.table(countries);
console.table(countries);
let Countries = [
  {
    name: "Finland",
    capital: "Helsinki",
    population: "2million",
    citizen: "Finnish",
  },

  {
    name: "Germany",
    capital: "Berlin",
    population: "7million",
    citizen: "German",
  },

  {
    name: "Nigeria",
    capital: "Abuja",
    population: "10million",
    citizen: "Nigerians",
  },
];
console.table(Countries);

// level 2:
console.assert(10 > 2 * 10);

console.warn("Do not skip this warning");

console.error("The above warning is not an error");
