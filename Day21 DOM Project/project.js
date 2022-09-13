let all = document.querySelector("div");
let span = document.querySelector("span");
let htwo = document.querySelector("h2");
let date = document.querySelector("h3");
let sub = document.querySelector("ul");
let list1 = document.querySelector("one.li");
let list2 = document.querySelector("two.li");

all.style.display = "flex";
all.style.flexDirection = "column";
all.style.alignItems = "center";
htwo.style.textDecoration = "underline";
htwo.style.marginRight = "17rem";
span.style.fontSize = "5rem";
date.style.padding = "";
sub.style.listStyle = "none";
sub.style.marginRight = "20rem";
// list1.style.width = "35rem";
// list1.style.height = "1.5rem";
// list1.style.backgroundColor = "green";

list.forEach(())

const random = () => {
  const rand = Math.floor(Math.random() * 256);
  return rand;
};
const randomColor = () => `rgb(${random()}, ${random()}, ${random()})`;
const year = document.querySelector("span");
setInterval(() => {
  year.style.color = randomColor();
}, 1000);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

setInterval(() => {
  let now = new date();
  let month = months[now.getMonth()];
  let dates = now.getDate();
  // < 10 ? '0' + now.getDate : now.getDate()
  let year = now.getFullYear();
  let hour = now.getHours();
  //   < 10 ? '0'+ now.getHours : now.getHours()
  let minute = now.getMinutes();
  //   < 10 ? '0' + now.getMinutes : now.getMinutes()
  let Seconds =
    now.getSeconds() < 10 ? "0" + `${now.getSeconds()}` : now.getSeconds();
  date.textContent = `${month} ${dates}
  ${year} ${hour} :${minute} :${seconds}`;
}, 1000);
