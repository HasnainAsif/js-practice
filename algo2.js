////////////////////////////////////// EXAMPLE #1 (Frequency Counter pattern)
// Write a function called same, which accepts 2 arrays. The function should return true if every value in the array
// has its corresponding value squared in the second array. The frequency of the values must be the same.

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

//     arr2.splice(correctIndex, 1); // if element has matched, delete element to prevent duplicate check
//   }
//   return true;
// }
// console.log(same([1, 2, 3, 2], [4, 1, 9, 1]));

////////////////////////////////////// EXAMPLE #2 (FInd closest element to zero)
//-- Find element from array closest to zero and if multiple items matches, get greater one

// INPUT and OUTPUT:
// 5 (length of elements)
// 0 2 3 4 5 (elements)
// 0 (output)

// 100
// -99 99 -98 98 -97 97 -96 96 -95 95 -94 94 -93 93 -92 92 -91 91 -90 90 -89 89 -88 88 -87 87 -86 86 -85 85 -84 84 -83 83 -82 82 -81 81 -80 80 -79 79 -78 78 -77 77 -76 76 -75 75 -74 74 -73 73 -72 72 -71 71 -70 70 -69 69 -68 68 -67 67 -66 66 -65 65 -64 64 -63 63 -62 62 -61 61 -60 60 -59 59 -58 58 -57 57 -56 56 -55 55 -54 54 -53 53 -52 52 -51 51 -50 50
// 50

// 100
// 99 -99 98 -98 97 -97 96 -96 95 -95 94 -94 93 -93 92 -92 91 -91 90 -90 89 -89 88 -88 87 -87 86 -86 85 -85 84 -84 83 -83 82 -82 81 -81 80 -80 79 -79 78 -78 77 -77 76 -76 75 -75 74 -74 73 -73 72 -72 71 -71 70 -70 69 -69 68 -68 67 -67 66 -66 65 -65 64 -64 63 -63 62 -62 61 -61 60 -60 59 -59 58 -58 57 -57 56 -56 55 -55 54 -54 53 -53 52 -52 51 -51 50 -50
// 50

//-- Solution
// // mark first element as closest to zero
// // loop through from 2nd element and if it is more closer than previous one mark 2nd element as closest
// // chech the difference of element from 0, to check how much close it is to 0
// Note: Difference of each element from 0 is 'element' itself

// const len = 5;
// const arr = '0 2 3 4 5'.split(' ');

// let closest = arr[0];
// for (let i = 1; i < len; i++) {
//   const element = arr[i];

//   if (Math.abs(element) === Math.abs(closest)) {
//     if (element > closest) {
//       closest = element;
//     }
//   } else if (Math.abs(element) < Math.abs(closest)) {
//     closest = element;
//   }
// }

// console.log(closest);

////////////////////////////////////// EXAMPLE ## (Sort Array -- Insertion sort)
var numArray = [140000, 104, 99];
for (let i = 0; i < numArray.length - 1; i++) {
  let minIdx = i;
  for (let j = i + 1; j < numArray.length; j++) {
    if (numArray[j] < numArray[minIdx]) {
      minIdx = j;
    }
  }

  var temp = numArray[minIdx];
  numArray[minIdx] = numArray[i];
  numArray[i] = temp;
}
console.log(numArray);
