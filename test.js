// var cards = [
//   'Jack',
//   8,
//   2,
//   6,
//   'King',
//   5,
//   3,
//   'Queen',
//   'Queen',
//   'Jack',
//   'King',
//   'Queen',
//   'Jack',
//   'King',
// ];

// const sortedArray = cards.sort();
// const newArray = [...sortedArray];

// const kingIndexes = [];
// for (let index = 0; index < sortedArray.length; index++) {
//   if (sortedArray[index] === 'King') {
//     kingIndexes.push(index);
//   }
// }

// for (let i = 0; i < kingIndexes.length; i++) {
//   const index = kingIndexes[0];
//   newArray.splice(index, 1);
//   newArray.push('King');
// }

// console.log(newArray);

// QUESTION
//-- Merge two arrays and remove duplicated values from them
// merge([1,2,3,4],[2,5,4,3]) // output: [1, 2, 3, 4, 5]

// Check if brackets are opening and closing with their respective ones like (){}[]
//// INPUT
// check('()') // true
// check('(}') // false
// check('(){}') // true
// check('{()}') // false
// check('(){}[]') // true

// Q# Check if a value is a palindrome or not

// Q# create palindroms from an input

////////////////////////////// QUESTION
// Given an array, rotate the array to the right by k steps, where k is non-negative
//-- INPUT #1:
//// [1,2,3,4,5,6,7], k = 3
//-- OUTPUT:
//// [5,6,7,1,2,3,4]

//-- INPUT #2:
//// [-1,-100,3,99], k = 2
//-- OUTPUT:
//// [3,99,-1,-100]

//-- SOLUTION:
// delete k number of elements from last of array
// merge deleted elements with original array left after deletion

// const getRotatedArray = (arr, k) => {
//   const deletedElements = arr.splice(arr.length - k, k);
//   return [...deletedElements, ...arr];
// };
// console.log(getRotatedArray([1, 2, 3, 4, 5, 6, 7], 3));

////////////////////////////// QUESTION
// Given a string, Return a reversed string where all characters that are not letters stay in same place, and all letters reverse their position

// input: "ab-cd" --> Output: "dc-ba"
// input: "a-bC-dEf=ghlj!!" --> Output: "j-lh-gfE=dCba!!"

// const reversedString = (str) => {
//   const strArr = str.split('');

//   let letterArr = [];
//   // get array only of letters
//   for (let i = 0; i < strArr.length; i++) {
//     const char = strArr[i];

//     const isLetter = char.toLowerCase() !== char.toUpperCase();
//     if (isLetter) {
//       letterArr.push(char);
//     }
//   }

//   // Traverse original array and replace each letter with letterArr elements from last and delete those elements
//   for (let i = 0; i < strArr.length; i++) {
//     const char = strArr[i];

//     const isLetter = char.toLowerCase() !== char.toUpperCase();
//     if (isLetter) {
//       const lastLetter = letterArr.pop();
//       strArr[i] = lastLetter;
//     }
//   }

//   return strArr.join('');
// };

// console.log(reversedString('ab-cd'));

////////////////////////////// QUESTION
// Get unmatched element from 2nd string with respect to first string

// input: "abcd" "bcfad" --> Output: "f"
// input: "rtgdf" "tjgfrd" --> Output: "j"

////////////////////////////// QUESTION
// detect value which is dublicated and make that value in order from 1 to n
let a = {
  a: 1,
  b: 2,
  c: 3,
  d: 2,
};

// output -- [2, 4] // 2 is duplicated value and 4 is value which should be value instead of 2
