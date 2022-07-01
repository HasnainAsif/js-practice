////////////////////////////////////// EXAMPLE #1 (Find closest element to zero)
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
// // Note: Difference of each element from 0 is 'element' itself

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
// //-- for assending order
// var numArray = [140000, 104, 99];
// for (let i = 0; i < numArray.length - 1; i++) {
//   let minIdx = i;
//   for (let j = i + 1; j < numArray.length; j++) {
//     if (numArray[j] < numArray[minIdx]) {
//       minIdx = j;
//     }
//   }

//   var temp = numArray[minIdx];
//   numArray[minIdx] = numArray[i];
//   numArray[i] = temp;
// }
// console.log(numArray);

// QUESTION
//-- Merge two arrays and remove duplicated values from them
// merge([1,2,3,4],[2,5,4,3]) // output: [1, 2, 3, 4, 5]

// Q# Check if a value is a palindrome or not

// Q# create palindrom from an input
