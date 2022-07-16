const empty = new Set();
console.log(empty);
console.log(empty.size);

const numbers = new Set();
console.log(numbers.size);
numbers.add(0);
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(8);
numbers.add(9);
numbers.add(10);
console.log(numbers);

console.log(numbers.delete(9));
console.log(numbers.size);

numbers.clear();
console.log(numbers);

const flavours = [
  "vanilla",
  "strawberry",
  "butterscotch",
  "chocolate",
  "raspberry",
];
const setOfFlavours = new Set(flavours);
console.log(setOfFlavours);

const countries = [
  ["Finland", 1],
  ["Sweden", 2],
  ["Norway", 3],
];
const map = new Map(countries);
console.log(map);
console.log(map.size);

// let a = [4, 5, 8, 9];
// let b = [3, 4, 5, 7];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let A = new Set(a);
let B = new Set(b);
let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C);
