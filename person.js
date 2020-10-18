// MODULE WRAPPER FUNCTION
// (function (exports, require, module, __filename, __dirname) {

// })
// console.log(__dirname, __filename)

// const person = {
//   name: 'Zac',
//   age: 30,
// }
// module.exports = person

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`My name is ${this.name} and ${this.age} years old`)
  }
}

module.exports = Person

// const person1 = new person('John Doe', 30)
// person1.greeting()
