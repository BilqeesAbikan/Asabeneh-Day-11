let quote =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

let mother =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(mother);

let num = "10";
let numInt = parseInt(num);
console.log(numInt);

let zero = 9.8;
let zeroInt = parseFloat(Math.round(9.8));

console.log(zeroInt);

let strig = "python";
let strig2 = "jargon";
console.log(strig.includes("on"));
console.log(strig2.includes("on"));

let hope = "I hope this course is not full of jargon.";
console.log(hope.includes("jargon"));

let anotherRandomNum = Math.random();
let zeroToHundred = anotherRandomNum * 101;
let anotherRandomNumRoundToFloor = Math.floor(zeroToHundred);
console.log(anotherRandomNumRoundToFloor);

let numBtnFiftyAndHundred = Math.floor(Math.random() * 51 + 50);
console.log(numBtnFiftyAndHundred);

let numBtnZeroAndTWOFiveFive = Math.floor(Math.random() * 256);
console.log(numBtnZeroAndTWOFiveFive);

let numbers = "1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(numbers);

let word = "JavaScript";
console.log(word.charAt(Math.random() * word.length));

let end =
  "You cannot end a sentence with because because because is a conjunction";
console.log(end.substr(30, 25));
