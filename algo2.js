////////////////////////////////////// EXAMPLE #1 (Frequency Counter pattern)
// Write a function called same, which accepts 2 arrays. The function should return true if every value in the array
// has its corresponding value squared in the second array. The frequency of the values must be the same.

// inputs:
// same([1,2,3], [4,1,9]) -- output --> true
// same([1,2,3], [1,9]) -- output --> false
// same([1,2,1], [4,4,1]) -- output --> false // must be same frequency

// same([1,2,3], [4,1,9,1]) -- output --> false
// same([1,2,3,2], [4,1,9,4]) -- output --> true
// same([1,2,3,2], [4,1,9,1]) -- output --> false

//-- solution:
// length of both arrays must be same
// make a loop on 1st array and compare it with each element of 2nd array by making another loop on array2
// if any element of array2 has matched with element of 1st array (means array2 element has matched as double of array1 element),
// do not check that element of array2 again -- for this save index of matched element from array2 in an array --
// its related examples are 3,  5 and 6 from above

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   const sameArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const element1 = arr1[i];

//     for (let j = 0; j < arr2.length; j++) {
//       const element2 = arr2[j];

//       if (element1 ** 2 === element2) {
//         arr2.splice(j, 1); // if element has matched, delete element to prevent duplicate check

//         sameArr.push(true);
//         break;
//       }
//     }
//   }

//   if (arr1.length === sameArr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(same([1, 2, 3, 2], [4, 1, 9, 1]));

//-- Other way
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }

//     arr2.splice(correctIndex, 1); // if elements have matched, delete element to prevent duplicate check
//   }
//   return true;
// }
// console.log(same([1, 2, 3, 2], [4, 1, 9, 1]));

//-- Other way with Better Big-O time
// No nested loop involve
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (const val of arr1) {
//     // frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1; // undefined + 1 = NaN
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (const val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (const key in frequencyCounter1) {
//     const value = frequencyCounter1[key];

//     // console.log(key ** 2 in frequencyCounter2);

//     if (!(key ** 2 in frequencyCounter2)) { // check if power of key
//       return false;
//     }

//     if (frequencyCounter1[key] != frequencyCounter2[key ** 2]) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3, 2], [4, 1, 9, 1]));

////////////////////////////////////// EXAMPLE #2
// Write a function to check if second string is anagram of first one

// validAnagram('','') // true
// validAnagram('aaz','zza') // false
// validAnagram('anagram','nagaram') // true
// validAnagram('rat','car') // false
// validAnagram('awesome','awesom') // false
// validAnagram('qwerty','qeywrt') // true
// validAnagram('texttwisttime','timetwisttext') // true

//-- Solution
// const validAnagram = (string1, string2) => {
//   const arr1 = string1.split('');
//   const arr2 = string2.split('');

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (const element1 of arr1) {
//     const matchedIdx = arr2.indexOf(element1);
//     if (matchedIdx === -1) {
//       return false;
//     }

//     arr2.splice(matchedIdx, 1); // delete matched element to avoid duplicate checks
//   }

//   //   if (arr2.length === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return true;
// };
// console.log(validAnagram('aaz', 'zza'));

//-- Other way with Better Big-O time
// No nested loop involve
// const validAnagram = (string1, string2) => {
//   if (string1.length !== string2.length) {
//     return false;
//   }

//   const countString1 = {};
//   const countString2 = {};
//   for (const element1 of string1) {
//     countString1[element1] = (countString1[element1] || 0) + 1;
//   }
//   for (const element2 of string2) {
//     countString2[element2] = (countString2[element2] || 0) + 1;
//   }

//   for (const key in countString1) {
//     if (!(key in countString2)) {
//       return false;
//     }

//     if (countString1[key] !== countString2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(validAnagram('anagram', 'nagaram')); // true
// console.log(validAnagram('rat', 'car')); // false

////////////////////////////////////// EXAMPLE #3 (Multiple Pointers Pattern)
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
// where the sum is zero. Return an array that includes both values whose sum is zero or return undefined if no pair exist.

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined
// sumZero([-2, -1, 0, 1, 2, 3, 4]) // [-2, 2]
// sumZero([-2, -1, 1, 3, 4]); // [-1, 1]

//------------ Solution#1 -- (Time Complexity is O(n^2))
// start a loop from 1st element to 2nd last element(because last element cannot be compared with anyother element)
// start a nested loop from 2nd element to last element and add its elements one by one with each element of loop1.
// if sum of any pair is zero, return those elements in array like [-3, 3].
// and if no pair exists with sum equal zero, return undefined

// const sumZero = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (Math.abs(arr[j] > Math.abs(arr[i]))) {
//         // To enhance performance
//         // as array is sorted, if Math.abs(arr[j]) becomes greater than Math.abs(arr[i]), then no need to move further
//         break;
//       }

//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };
// console.log(sumZero([-3, 0, 1, 2])); // [-3, 3]

//------------ Solution#2 (Time Complexity is O(n^2))
// start a loop from 1st element to 2nd last element(because last element cannot be compared with anyother element)
// start a nested loop from last element to 2nd element and add its elements one by one with each element of loop1.
// if sum of any pair is zero, return those elements in array like [-3, 3].
// and if no pair exists with sum equal zero, return undefined

// const sumZero = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = arr.length - 1; j >= i + 1; j--) {
//       if (Math.abs(arr[j]) < Math.abs(arr[i])) {
//         // To enhance performance
//         // as array is sorted, if Math.abs(arr[j]) becomes less than Math.abs(arr[i]), then no need to move further
//         break;
//       }

//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };
// console.log(sumZero([-3, 0, 1, 2])); // [-3, 3]

//------------ Solution#3 -- more enhanced way (Time Complexity is O(n), Space Complexity is O(1))
// [[-3, 0, 1, 2, 4]] // initially, -3 is first pointed element and 4 is 2nd pointed element
// set first pointer on start of array and 2nd pointer on end of array
// compare first pointed element with 2nd pointed element, if their sum is zero return values
// As array is sorted in assending order, if 2nd pointed element is greater than first one, change pointer of 2nd element to previous value(2)
// if sum of 1st and 2nd pointed elements is zero return values and if 2nd pointed element is less than 1st pointed element, change pointer of 1st element to next value(0)
// NOTE: when we will compare values with greater than or less than operators, always use absolute values

// const sumZero = (arr) => {
//   let left = 0,
//     right = arr.length - 1; // last index

//   //   while (1) {
//   //     if (left === right) return;
//   while (left < right) {
//     if (arr[left] + arr[right] === 0) {
//       return [arr[left], arr[right]];
//     }
//     if (Math.abs(arr[right]) > Math.abs(arr[left])) {
//       // Math.abs(arr[right]) + Math.abs(arr[left] is positive(greater than 0)
//       right--;
//     }
//     if (Math.abs(arr[right]) < Math.abs(arr[left])) {
//       // Math.abs(arr[right]) + Math.abs(arr[left] is negative(less than zero)
//       left++;
//     }
//   }
// };

// console.log(sumZero([-3, 0, 1, 2, 3, 4])); // [-3, 3]

////////////////////////////////////// EXAMPLE #4
// Write a function called countUniqueValues, which accepts a sorted array and count the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13 ]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

const countUniqueValues = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    obj[element] = (obj[element] || 0) + 1;
  }

  return Object.keys(obj).length;
};
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
