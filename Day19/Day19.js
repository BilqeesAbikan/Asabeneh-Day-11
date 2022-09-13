// Create a closure which has one inner function

// function outerFunction() {
//   let one = 1;
//   function innerFunction() {
//     one++;
//     return one;
//   }
//   return innerFunction;
// }
// const innerFunc = outerFunction();
// console.log(innerFunc());

// Create a closure which has three inner functions
function outerFunction() {
  let one = 2;
  function firstInner() {
    one++;
    return one;
  }
  function secondInner() {
    one--;
    return one;
  }
  function thirdInner() {
    one >= 2;
    return one;
  }
  return {
    firstInner: firstInner(),
    secondInner: secondInner(),
    thirdInner: thirdInner(),
  };
}
const allFunctions = outerFunction();
console.log(allFunctions.firstInner);
console.log(allFunctions.secondInner);
console.log(allFunctions.thirdInner);
