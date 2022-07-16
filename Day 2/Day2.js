let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 8));
console.log(challenge.substring(2, 22));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let media = "Facebook Google Microsoft Apple IBM Oracle Amazon";
console.log(media.split());
console.log(media.split(" "));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));

let string = "   30 Days Of JavaScript   ";
console.log(string);
console.log(string.trim(" "));

console.log(challenge.startsWith(30));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match("a"));

let days = "30 Days Of";
console.log(days.concat("JavaScript"));

console.log(challenge.repeat(2));
