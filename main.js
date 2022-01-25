// CLOSURES, IIFE, WHAT IS SCOPE, LEXICAL/STATIC SCOPE, function methods(call, apply, bind, toString), CURRYING

////////////////////////////////////////////////// CLOSURES
// Initiate counter

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

////////////////////////////////////////////////// SELF EXECUTING/INVOKING FUNCTION or Immediately Invoked Function Expression (IIFE)
//// Run one time only just like in above example
//// after execution we loose the reference to function unlike named functions whose declared name is their reference from which we can call that function again
//// Declaraion Method 1
// (function () {
//   console.log(1);
// })();

//// Declaraion Method 2
// (function () {
//   console.log(1);
// })();

//// passing parameters to self-invoking function
// ((w, d) => {
//   //
// })(window, document); // window and documents are not available in nodejs

//// moduler pattern of self invoking function
// var module = (function () {
//   // private
//   return {
//     // public
//   };
// })();

// console.log(module);

////////////////////////////////////////////////// WHAT IS SCOPE
// Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

// Scope means area, space, or region.
// Global scope means global space or a public space.
// Local scope means a local region or a restricted region.

////////////////////////////////////////////////// LEXICAL/STATIC SCOPE
//// Lexical scope is a variable defined outside your scope or upper scope is automatically available inside your scope which means you don't need to pass it

//// Example 1
// function grandfather() {
//   var name = 'Hammad';
//   var sameName = 'outer-most';
//   // 'likes' is not accessible here
//   function parent() {
//     var sameName = 'outer';
//     // 'name' is accessible here
//     // 'likes' is not accessible here
//     function child() {
//       // Innermost level of the scope chain
//       // 'name' is also accessible here
//       var likes = 'Coding';
//       var sameName = 'inner';
//       console.log(name, likes, sameName);
//     }
//     child();
//   }
//   parent();
// }
// grandfather();

//// Example 2
// var b = 1;
// var c = 11;
// function outer() {
//   console.log(b); // 1
//   b = 2;
//   c = 12;
//   console.log(b); // 2
//   function inner() {
//     console.log('b', b); // undefined because b is redeclared in inner function and hoisting concept is applied otherwise it would be 2
//     console.log('c', c); // 5
//     b++; // NAN because b is undefined
//     console.log(b); // 2
//     var b = 3;
//     console.log(b); // 3
//   }
//   inner();
// }
// outer();

//// Example 3
// // Define a variable in the global scope:
// const fullName = 'Oluwatobi Sofela';

// // Define nested functions:
// function profile() {
//   function sayName() {
//     function writeName() {
//       return fullName;
//     }
//     return writeName();
//   }
//   return sayName();
// }

// console.log(profile());

//https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/

//////// What is Lexical Scope
// Lexical scope is the definition area of an expression.
// In other words, an item's lexical scope is the place in which the item got created.
// The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

//// Example of Lexical Scope

// // Define a variable in the global scope:
// const myName = 'Oluwatobi';

// // Call myName variable from a function:
// function getName() {
//   const name = 'asd';
//   return myName;
// }

// myName’s lexical scope is the global scope because we defined myName in the global environment.
// name’s lexical scope is getName()’s local environment because getName() is name’s definition space.

////////////////////////////////////////////////// call, apply, bind, toString
//// Call is slightly faster in performance than Apply.
//// cannot bind context to arrow function, but can pass all other arguments to call, apply and bind

// Objects can have methods, likewise functions being objects can also have methods. In fact, a JavaScript function comes with four built-in methods which are:
// Function.prototype.apply()
// Function.prototype.bind() (Introduced in ECMAScript 5 (ES5))
// Function.prototype.call()
// Function.prototype.toString()

//// EXAMPLE 1
//// call, apply, toString
// function introduce(name, interest) {
//   console.log("Hi! I'm " + name + ' and I like ' + interest + '.');
//   console.log('The value of this is ' + this + '.'); // this is 1st argument of apply, call and bind
// }

// introduce('Hammad', 'Coding'); // the way you usually call it
// // pass the arguments one by one after the context
// // introduce.call(window, 'Batman', 'to save Gotham'); // context is window - (error) window is not defined
// introduce.apply('Hi', ['Bruce Wayne', 'businesses']); // context is 'Hi'
// introduce.call(this, 'Batman', 'to save Gotham'); // context is this
// introduce.bind('Hiiiii', 'Superman', 'to save World')(); // context is Hiiiii - bind don't call function and have to call it explicitly.
// console.log('Function to String: ', introduce.toString()); // print function itself

//// EXAMPLE 2 (binding this to arrow functions)
// const arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//   (() => {
//     console.log(`Array index ${i + 1} is: `, this); // cannot specify 'this' in arrow functions, no matter we use bind, call or apply
//   }).bind(arr[i])();
// }

//// EXAMPLE 3 (call method)
//// we can also relate this example to apply and bind method
// const arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//   (function () {
//     console.log(`Array index ${i + 1} is: `, this.toString());
//   }.call(arr[i])); // specifying this to arr[i]
// }

////////////////////////////////////////////////// CURRYING
// It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence.
// Currying allows us to easily get partials
// Currying will make your code easier to refactor
// It helps to create a higher-order function.
// The currying requires the function to have a fixed number of arguments.
// The main benefit of currying is when you need to use the same call with some of the same parameters a lot i.e it helps to avoid passing the same variable again and again. In these situations, currying becomes a good technique to use.
// https://javascript.info/currying-partials

//// EXAMPLE 1
// function curry(f) {
//   console.log(f, f.length);
//   return function (a) {
//     return function (b) {
//       return a + b;
//     };
//   };
// }

// const sum = (a, b) => {
//   return a + b;
// };

// // console.log(sum(1, 2, 3));

// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)); // 2 partials

//// EXAMPLE 2
// var _ = require('lodash');

// const sum = (a, b, c) => {
//   return a + b + c;
// };

// // console.log(sum(1, 2, 3)); // 6

// const curriedSum2 = _.curry(sum);
// console.log(curriedSum2(1, 2, 3)); // 6 - still callable normally
// console.log(curriedSum2(1)(2, 3)); // 6 - currying of 1st arg
// console.log(curriedSum2(1)(2)(3)); // // 6 - full currying

//// Example 3 (Manual currying of Example 2) - Advanced currying implementation
// const sum = (a, b, c) => {
//   return a + b + c;
// };

// const curry = (f) => {
//   return function curried(...args) {
//     if (args.length >= f.length) {
//       // check can also be '===' instead of '>='
//       return f.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// };

// const curriedSum3 = curry(sum);
// console.log(curriedSum3(1, 2, 3));
// console.log(curriedSum3(1)(2, 3));
// console.log(curriedSum3(1)(2)(3));

// const funcFirst = curriedSum3(5); // fixing 1 arg for other calls instead of calling same argument again and again
// console.log(funcFirst(6)(4));
// console.log(funcFirst(3)(8));
// console.log(funcFirst(5)(2));
// The main benefit of currying is when you need to use the same call with some of the same parameters a lot i.e it helps to avoid passing the same variable again and again. In these situations, currying becomes a good technique to use.

//////////////////////////////////////////////////
