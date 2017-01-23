/* eslint-disable */
class Person {
  constructor(name, surname) {
    this._name = name;
    this._surename = surname;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  getUserName() {
    return `${this._name} ${this._surename}`
  }
}

const person = new Person('John', 'Smith');

console.log(person.name); // John
console.log(person.getUserName()); // John Smith
