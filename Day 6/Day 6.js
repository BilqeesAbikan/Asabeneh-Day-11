for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let b = 0;
while (b <= 10) {
  console.log(b);
  b++;
}

let l = 0;
do {
  console.log(l);
  l++;
} while (l <= 10);

for (let q = 10; q >= 0; q--) {
  console.log(q);
}

// let x = "";
// for (let i = 0; i <= 7; i++) console.log((x += ""));

for (let i = 0; i <= 7; i++) console.log("#".repeat(i));

for (let s = 0; s <= 10; s++) {
  console.log(`${s} * ${s} = ${s * s}`);
}

for (let i = 0; i <= 10; i++) console.log(`${i} ${1 * i} ${1 * i * i}`);

// let p = "i";
// for (let p = "i"; p <= 10; p++) {
//   console.log(`${p} *  ${p} = ${p * p}`);
// }

for (let even = 0; even <= 100; even++)
  if (even % 2 == 0) {
    console.log(even);
  }

for (let odd = 1; odd <= 100; odd += 2) {
  console.log(odd);
}

let sum = 0;
for (let j = 1; j <= 100; j++) {
  sum = sum + j;
  console.log(sum);
}

let m;
let sumEven = 0;
let sumOdd = 0;
for (m = 0; m <= 100; m++) {
  m % 2 == 0 ? (sumEven += m) : (sumOdd += m);
}
console.log(sumEven, sumOdd);

var arr = [];
while (arr.length < 5) {
  var r = Math.floor(Math.random() * 10);
  arr.push(r);
}
console.log(arr);

var arr = [];
while (arr.length < 5) {
  var r = Math.floor(Math.random() * 100);
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

function keyG() {
  var emptyStr = "";
  var str = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    emptyStr += str.charAt(Math.floor(Math.random() * str.length));

  return emptyStr;
}

const arrofNos = []
for (let i = 0; i < 5; i++)
arrofNos.push(Math.floor(Math.random() * 10))

console.log(arrOfNos)


// const arrOf = []
for(let i = 0; i < 10; i ++){
  const arrOf = Math.floor(Math.random() * 10)
  if (arrOf.indexOf(random) === -1 && arrOf.length < 5) arrOf.push(random)}
  console.log(arrOf)

  for (let i = 0; i < 1; i++)
  console.log()

















}
