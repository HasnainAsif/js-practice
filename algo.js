// Algorithms practice

////////////////////////////////////// EXAMPLE #1
//-- Count same fruits
// const fruits = ['apple', 'orange', 'apple', 'mango'];
// const countFruits = fruits.reduce((acc, fruit) => {
//   if (acc[fruit]) {
//     acc[fruit] = acc[fruit] + 1;
//   } else {
//     acc[fruit] = 1;
//   }

//   return acc;
// }, {});

// console.log('countFruits', countFruits);

//-- Count same numbers
// const numbers = [1, 5, 7, 5, 10, 7, 7, 3, 10];
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

//-- Write a function which takes in a string and returns counts of each character in the string.
//-- Count how many times a character has appeared in a string
//-- Count same characters in a string
// function charCount(str) {
//   let output = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (output[char]) {
//       output[char] = output[char] + 1;
//     } else {
//       output[char] = 1;
//     }
//   }

// //   for (let char of str) {
// //     char = char.toLowerCase();
// //     output[char] = ++output[char] || 1;
// //   }

// //   for (let i = 0; i < str.length; i++) {
// //     const char = str[i].toLowerCase();
// //     if (output[char]) {
// //       output[char] = output[char] + 1;
// //     } else {
// //       output[char] = 1;
// //     }
// //   }

//   console.log(output);
// }
// charCount('aaabbda');
// charCount('my phone no is 123321');
// charCount('Hello Hi');
//// STEPS:
// check what input can be -- in our case it is 'aaabbda'
// check what output can be -- in our case it is {a:4,b:2,d:1}

// make object to return at the end
// loop over string for each character
// if a character is a key in object, add one to count
// if a character is not in object, add it to object and set value to 1
// if character is something else (space, period, etc.)  don't do anything
// return object at end

////////////////////////////////////// EXAMPLE #2
// Find Factorial of a number using for loop

// let input = 5, then output will be 5 * 4 * 3 * 2 * 1
// let input = 6, then output will be 6 * 5 * 4 * 3 * 2 * 1

// function findFactorial(value) {
//   let factorial = 1;
//   for (let i = value; i >= 1; i--) {
//     // factorial = factorial * 5

//     factorial *= i;
//   }
//   return factorial;
// }
// console.log(findFactorial(5));

//-- Find Factorial of a number using recursive function
// let factorial = 1;
// function findFactorial(value) {
//   factorial *= value;
//   let newValue = value - 1;
//   if (newValue === 0) {
//     return factorial;
//   }
//   return findFactorial(newValue);
// }

// console.log(findFactorial(5));

//-- other way
// function findFactorial(value) {
//   if (value === 0) {
//     return 1;
//   }
//   return value * findFactorial(value - 1);
// }

// console.log(findFactorial(6));

//-- Find Factorial of a number using recursive function and IIFE
// const findFact = (() => {
//   let factorial = 1;
//   return function findFactorial(value) {
//     factorial *= value;
//     let newValue = value - 1;
//     if (newValue === 0) {
//       return factorial;
//     }
//     return findFactorial(newValue);
//   };
// })();
// console.log(findFact(6));

////////////////////////////////////// EXAMPLE #3
// Create a Fibonacci Series using a for loop

// let input = 7, then output will be 0, 1, 1, 2, 3, 5 , 8, 13 and so on
// find last 2 values
// add last 2 values to get next value
// store all values in an array

// function findFibonacciSeries(n) {
//   if (n <= 1) {
//     return 'n must be greater than 1';
//   }

//   const FibonacciSeries = [0, 1];
//   for (let i = 2; i < n; i++) {
//     // const newValue = FibonacciSeries[i - 2] + FibonacciSeries[i - 1];
//     // FibonacciSeries.push(newValue);

//     FibonacciSeries[i] = FibonacciSeries[i - 2] + FibonacciSeries[i - 1];
//   }

//   //   return FibonacciSeries;
//   return FibonacciSeries.join(', ');
// }

// console.log(findFibonacciSeries(7));

//-- Find Fibinacci series using recursive function
// const fibSeries = [0, 1];
// function findFibonacciSeries(fibonacciSeries, n) {
//   if (n <= 2) {
//     return fibonacciSeries;
//   }

//   const newIndex = fibonacciSeries.length; // array last index is 1 less than total length
//   const lastValue = fibonacciSeries[newIndex - 1];
//   const secondLastValue = fibonacciSeries[newIndex - 2];

//   //   fibonacciSeries.push(lastValue + secondLastValue)
//   fibonacciSeries[newIndex] = lastValue + secondLastValue;

//   return findFibonacciSeries(fibonacciSeries, n - 1);
// }

// console.log(findFibonacciSeries(fibSeries, 8));

////////////////////////////////////// EXAMPLE #4
// Check whether a number is a Prime Number or not

// let input = 5, then output will be '5 is a prime number'
// let input = 6, then output will be '6 is not a prime number'
// let input = 11, then output will be '11 is a prime number'

// all even numbers are not prime numbers
// prime numbers are those which are only divisible by itself and 1
// call a loop from 2 to number, and divide number with each index, and if number has divided only 1 time then its a prime number,
// otherwise its not a prime number

// function isPrimeNumber(number) {
//   let countDivideable = 0;
//   for (let i = 2; i <= number; i++) {
//     if (number % i === 0) {
//       countDivideable++;
//     }
//   }

//   if (countDivideable === 1) {
//     return `${number}: is a prime number`;
//   } else {
//     return `${number}: is not a prime number`;
//   }
// }
// console.log(isPrimeNumber(10));

// if number is divisible by any other number except 1 and itself, then it is not a prime number
// call loop from 2 to number - 1, and divide number with each index, if number is divided(or remainder is 0),
// then its not a prime number otherwise its a prime number
//-- Other way
// function isPrimeNumber(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return `${number}: is not a prime number`;
//     }
//   }

//   return `${number}: is a prime number`;
// }
// console.log(isPrimeNumber(10));

////////////////////////////////////// EXAMPLE #5
//Find the largest element of an array

// let input = [1,5,3,2], then output will be 5

// 1st method -- sort array in descending order and get first indexed element of array
// 2nd method -- mark 1st element as maxElement and compare it with all incoming elements, if anyone(element) is greater than
// maxElement then make greater one(element) as maxElement and compare new maxElement with all incoming elements and so on...

// function findMax(arr) {
//   let maxElement = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }

//   return maxElement;
// }

// console.log(findMax([1, 5, 3, 2]));

////////////////////////////////////// EXAMPLE #6
// Reverse a string

// let input = "abcd", then output will be "dcba"

// loop on string from last to 1st element
// create a new string and concatenate each character into it

// function findReverseString(str) {
//   let reverseStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }

// console.log(findReverseString('abcd'));

//-- other way
// function findReverseString(str) {
//   let reverseStr = str.split('').reverse().join('');
//   return reverseStr;
// }

// console.log(findReverseString('abcd'));

////////////////////////////////////// EXAMPLE #5
// Remove duplicate item from an array

// let input = [1,3,3,5,5,3,2], then output will be [1,3,5,2]
// create an array named distinctElements.
// add 1st element to distinctElements.
// loop through input array from index 1
// before adding second element to distinctElements, loop distinctElements and if second elmenet already exists or not.
// if second element already exists into distinctElements, then do not add 2nd element into distinctElements and so on...

// function findDistinctElements(arr) {
//   const distinctElements = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     const element = arr[i];

//     let isMatched = false;
//     for (const distElement of distinctElements) {
//       if (distElement === element) {
//         isMatched = true;
//         break; // whenever matching occurs break the loop
//       }
//     }

//     if (!isMatched) {
//       distinctElements.push(element);
//     }
//     isMatched = false;
//   }

//   return distinctElements;
// }

// console.log(findDistinctElements([1, 3, 3, 5, 5, 3, 2]));

////////////////////////////////////// EXAMPLE #6
// Longest String in Array

// let input = ["asd","ewqqw","asddss","ympvw"], then output will be ["asddss","ewqqw","ympvw","asd"]

// loop through input from index 1
// mark first string as longestString and compare it with all incoming string's length, if any incoming string's length is
// greater, then mark new string as longestString and so on...

// function findLongestStr(arr) {
//   let longestString = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longestString.length) {
//       longestString = arr[i];
//     }
//   }

//   return longestString;
// }

// console.log(findLongestStr(['asd', 'ewqqw', 'asddss', 'ympvw']));
