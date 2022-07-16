function printFullName() {
  let firstName = "Bilqees";
  let lastName = "Abikan";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
printFullName();

function printFullNameReturn() {
  let firstName = "Bilqees";
  let lastName = "Abikan";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullNameReturn());

addNumbers(4, 2);
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumbers(4, 2));

function areaOfRectangle() {
  let length = 5;
  let width = 5;
  let multiply = length * width;
  return multiply;
}
console.log(areaOfRectangle());

function perimeterOfRectangle() {
  let lenght = 3;
  let width = 3;
  let perimeter = 2 * (lenght + width);
  return perimeter;
}
console.log(perimeterOfRectangle());

function volumeOfRectPrism() {
  let lenght = 2;
  let width = 2;
  let height = 2;
  let volume = lenght * width * height;
  return volume;
}
console.log(volumeOfRectPrism());

// function areaOfCircle() {
//   let r = 4;
//   let areaC = Math.PI * r * r;
//   return areaC;
// }
// console.log(areaOfCircle());
function areaOfCircle(r) {
  let areaC = Math.PI * r * r;
  return areaC;
}
console.log(areaOfCircle(4));

function circumOfCircle(r) {
  let circum = 2 * Math.PI * r;
  return circum;
}
console.log(circumOfCircle(5));

function density() {
  let mass = 144;
  let vol = 12;
  let dens = mass / vol;
  return dens;
}
console.log(density());

function speed() {
  let distance = 12;
  let time = 6;
  let total = distance / time;
  return total;
}
console.log(speed());

function weight() {
  let theMass = 5;
  let gravity = 5;
  let both = theMass * gravity;
  return both;
}
console.log(weight());

function convertCelsiusToFahrenheit(c) {
  let all = c * (9 / 5) + 32;
  return all;
}
console.log(convertCelsiusToFahrenheit(5));

function checkSeason(check) {
  let son = 0;
  for (let i = 0; i < check.lenght; i++) {}
}

function weightCheck() {
  let weight = 2;
  let height = 5;
  let bmi = 2 / (5 * 5);
  return bmi;
}
console.log();
