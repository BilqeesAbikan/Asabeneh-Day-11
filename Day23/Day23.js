let body = document.body;

let header = document.querySelector("h1");
let topic = document.querySelector("span");
let author = document.querySelector("span");
let value = document.querySelector(".value");
let generate = document.querySelector(".generate");
let button = document.querySelector("button");
let type = document.querySelector("input");
let container = document.querySelector(".container");

body.style.display = "grid";
body.style.placeItems = "center";
body.style.fontFamily = "Arial, Helvetica, sans-serif,Roboto";
body.style.padding = "0";
body.style.margin = "auto 0";

header.style.color = "#67c183";
value.style.color = "red";
generate.style.display = "flex";
generate.style.textAlign = "center";
generate.style.Color = "green";
generate.style.gap = "3rem";
// generate.style.width = "200px";
button.style.width = "8rem";
button.style.color = "white";
button.style.border = "none";
button.style.marginLeft = "7rem";
button.style.backgroundColor = "#5bbc7a";
type.style.width = "500px";
type.style.height = "2rem";
type.style.Color = "#5bbc7a";

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(9,1fr)";

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

const generateNums = (max = 51) => {
  container.innerHTML = "";
  Array.from(Array(max).keys()).forEach((num) => {
    const everyDiv = document.createElement("div");
    everyDiv.textContent = num;
    everyDiv.style.display = "flex";
    everyDiv.style.justifyContent = "center";
    everyDiv.style.alignItems = "center";
    everyDiv.style.height = "40px";
    everyDiv.style.width = "85px";
    everyDiv.style.margin = "5px";
    everyDiv.style.background = isPrime(num)
      ? "red"
      : num % 2
      ? "green"
      : "yellow";
    everyDiv.style.margin = "2px";

    container.appendChild(everyDiv);
  });
};

// console.log();

generateNums();
button.addEventListener("click", () => {
  const inputValue = Number(type.value);
  if (!inputValue) {
    Number.textContent = "input value must be a number";
    return;
  }
  generateNums(inputValue);
});
