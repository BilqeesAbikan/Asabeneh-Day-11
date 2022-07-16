const ray = [];
console.log(ray);
const flavours = [
  "vanilla",
  "strawberry",
  "chocolate",
  "buttermilk",
  "mint",
  "milky",
  "raspberry",
];

console.log("Number of flavours:", flavours.length);
let firstFlavour = flavours[0];
console.log(firstFlavour);

let middleFlavour = flavours[3];
console.log(middleFlavour);

let lastFlavour = flavours[6];
console.log(lastFlavour);

const mixedDataTypes = ["flavours", 225, true, false, 3303, "glass"];
console.log("Number of mixedDataTypes:", mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
let firstCompany = itCompanies[0];
console.log(firstCompany);
let middleCompany = itCompanies[3];
console.log(middleCompany);
let lastCompany = itCompanies[6];
console.log(lastCompany);

const face = ["FACEBOOK"];
console.log(face);
const goo = ["GOOGLE"];
console.log(goo);
const mic = ["MICROSOFT"];
console.log(mic);
const app = ["APPLE"];
console.log(app);
const ibm = ["IBM"];
console.log(ibm);
const ora = ["ORACLE"];
console.log(ora);
const ama = ["AMAZON"];
console.log(ama);
const allCompanies = [
  "FACEBOOK",
  "GOOGLE",
  "MICROSOFT",
  "APPLE",
  "IBM",
  "ORACLE",
  "AMAZON",
];
console.log(allCompanies);

const Companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let index = Companies.indexOf("Apple");
if (index === -1) {
  console.log("Apple is found");
} else {
  console.log("Apple is not found");
}

console.log(Companies.sort());
console.log(Companies.reverse());
console.log(Companies.slice(0, 3));
console.log(Companies.slice(4, 7));
console.log(middleCompany.slice());

itCompanies.shift();
console.log(itCompanies);

itCompanies.splice(0);
console.log(itCompanies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);

const shoppingList = ["Milk", "Coffee", "Tea", "Honey"];
shoppingList.pop("Honey");
console.log(shoppingList);
console.log(shoppingList.replace);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

// const min = Math.min(...ages);
// const max = Math.max(...ages);
// function minMax(ages) {
//   let minimum = Math.min(...ages);
//   let maxmimum = Math.max(...ages);
//   let result = [maximum, minimum];
//   return result;
// }

const countries1 = [
  "Afghanistan",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "China",
];
console.log(countries1);

const countries2 = [
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Korea",
];
console.log(countries2);
