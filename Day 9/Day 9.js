const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
countries.forEach((country) => console.log(country));

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((name) => console.log(name));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => console.log(number));

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesHaveSixCharacters = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHaveSixCharacters);

const countriesMoreThanSix = countries.filter((country) => country.length >= 6);
console.log(countriesMoreThanSix);

const countriesStartWithE = countries.filter((country) =>
  country.startsWith("E")
);
console.log(countriesStartWithE);

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productsWithPrice = products.filter((product) => product.price > 0);
console.log(productsWithPrice);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// some() method will Return True If any predicate is True While, every() method will Return True If all predicates are true.

// console.log(countries.reduce(acc, cur, i, arr) => {
//   const lastindex = arr
// })
const greaterThanSeven = names.some((name) => name.length > 7);
console.log(greaterThanSeven);

const allCountries = countries.every((country) => country.includes("land"));
console.log(allCountries);

const onlySixCountries = countries.find((country) => country.length === 6);
console.log(onlySixCountries);

const firstCountry = countries.findIndex((country) => country.length === 6);
console.log(firstCountry);

const norwayPosition = countries.findIndex((country) => country === "Norway");
console.log(norwayPosition);

const russiaPosition = countries.findIndex((country) => country === "Russia");
console.log(russiaPosition);

const priceSum = products.reduce((acc, cur) => acc + cur, 0);
console.log(priceSum);
