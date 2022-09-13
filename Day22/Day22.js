let body = document.body;

let header = document.createElement("h1");
let sub = document.createElement("span");
let author = document.createElement("span");
let numbers = document.createElement("div");

body.append(header);
body.append(sub);
body.append(author);
body.append(numbers);

body.style.display = "grid";
body.style.placeItems = "center";
body.style.fontFamily = "Roboto";

header.textContent = "Number Generator";
sub.textContent = "30 Days Of JavaScript:DOM Day 2";
author.textContent = "Author: Bilqees Abikan";

let numList;
let isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < 102; i++) {
  numList = document.createElement("div");
  numList.textContent = i;
  isPrime(i)
    ? (numList.style.backgroundColor = "#fd5e53")
    : i % 2 === 0
    ? (numList.style.backgroundColor = "#21bf73")
    : (numList.style.background = "#fddb3a");
  numList.style.padding = "1rem";
  numList.style.margin = "2 px";
  numList.style.alignItems = "center";
  numList.style.fontSize = "30px";
  numList.style.fontWeight = "bold";
  numList.style.color = "white";
  numList.style.textAlign = "center";
  numList.style.width = "6rem";
  //   numList.style.height = "0.5rem";

  numbers.append(numList);
}

numbers.style.display = "grid";
numbers.style.gridTemplateColumns = "repeat(6,1fr)";
numbers.style.marginTop = "1.5rem";
