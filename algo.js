// Algorithms practice

//// EXAMPLE #1
//-- Count same fruits
const fruits = ['apple', 'orange', 'apple', 'mango'];
const countFruits = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit] = acc[fruit] + 1;
  } else {
    acc[fruit] = 1;
  }

  return acc;
}, {});

console.log('countFruits', countFruits);

//-- Count same numbers
const numbers = [1, 5, 7, 5, 10, 7, 7, 3, 10];
// const countNumbers = numbers.reduce((acc, number) => {
//   if (acc[number]) {
//     acc[number] = acc[number] + 1;
//   } else {
//     acc[number] = 1;
//   }

//   return acc;
// }, {});

// console.log(countNumbers);

//--> other way
// const countNumbers2 = {};
// numbers.forEach((number) => {
//   if (countNumbers2[number]) {
//     countNumbers2[number] = countNumbers2[number] + 1;
//   } else {
//     countNumbers2[number] = 1;
//   }
// });

// console.log(countNumbers2);
