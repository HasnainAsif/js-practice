////////////////////////////////////////////////// CLOSURES
// Initiate counter

//////////// SIMPLE CLOSURE
// // Function to increment counter
const add = function () {
  let counter = 0;
  console.log('running');
  function inner() {
    counter += 1;
    return counter;
  }
  return inner; // if we call inner here instead of returning inner function, it will not make closure
};

// // NOT A CLOSURE WAY
// console.log(add()())
// console.log(add()())
// console.log(add()())

// // CLOSURE WAY
const addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

//////////// CLOSURE WITH IIFE
// // Function to increment counter
// const add = (function () {
//   let counter = 0;
//   console.log('running');
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// // Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

// // Function to increment counter
// const add = (function () {
//   let counter = 0;
//   console.log('running');
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

//////////// STALE CLOSURE
// let counter = 0;
// function increment() {
//   counter++;
//   let  message = 'Counter is: ' + counter;
//   return function () {
//     console.log({ message });
//     console.log({ counter });
//   };
// }
// const log = increment();
// increment();
// log();

//--> Solution #1 to stale closure
//// declare message variable outside increment function and initialize inside increment function but outside return function
// let counter = 0;
// let message;
// function increment() {
//   counter++;
//   message = 'Counter is: ' + counter;
//   return function () {
//     console.log({ message });
//     console.log({ counter });
//   };
// }
// const log = increment();
// increment();
// log();

//--> Solution #2 to stale closure
//// initialize message variable inside of return function
// let counter = 0;
// function increment() {
//   counter++;
//   return function () {
//     let message = 'Counter is: ' + counter;
//     console.log({ message });
//     console.log({ counter });
//   };
// }
// const log = increment();
// increment();
// log();