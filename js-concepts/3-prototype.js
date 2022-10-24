// a function which is called with new keyword, is a contructor function
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

const person1 = new Person('Hasnain', 'Asif');
const person2 = new Person('Zaid', 'Asif');

// // getFullName is only accessible for person1
// person1.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// // getFullName is accessible for all Person instances
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(person1.getFullName());
console.log(person2.getFullName());
