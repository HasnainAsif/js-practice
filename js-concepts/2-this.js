// Four types of this bindings, in order of precedence(priority)
// 1) New Binding
// 2) Explicit Binding
// 3) Implicit Binding
// 4) Default Binding

//// Implicit Binding
const person = {
  name: 'Hasnain',
  sayMyname: function () {
    console.log(`My name is ${this.name}`);
  },
};
// person.sayMyname(); // this will be previous value of ".". In this case it is "person"

//// Explicit Binding
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName.call(person); // call is explained later

//// New Binding
// function Person(name) {
//   // this = {} -- new keyword does this internally
//   this.name = name
// }

// const p1 = new Person('Hasnain')
// const p2 = new Person('Zaid')

// console.log(p1.name)
// console.log(p2.name)

//// Default(Global) Binding
// const name = 'Hasnain' // for declaring global variable in browser
globalThis.name = 'Hasnain'; // except this, sayMyName will return undefined
sayMyName();
