function keyG() {
  var emptyStr = "";
  var str = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    emptyStr += str.charAt(Math.floor(Math.random() * str.length));

  return emptyStr;
}

console.log(keyG());

function key() {
  var emptyStr = "";
  var str = "#ee33df";

  for (var i = 0; i < 6; i++)
    emptyStr += str.charAt(Math.floor(Math.random() * str.length));

  return emptyStr;
}

console.log(key());

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
