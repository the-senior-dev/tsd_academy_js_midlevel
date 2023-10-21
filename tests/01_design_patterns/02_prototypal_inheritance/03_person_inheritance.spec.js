const { Person, Student } = require('../../../src/01_design_patterns/02_prototypal_inheritance/03_person_inheritance.js');

test('Person prototype works correctly', () => {
  const person = new Person('Alice', 30);
  expect(person.name).toEqual('Alice');
  expect(person.age).toEqual(30);
  expect(person.introduce()).toEqual('Hello, my name is Alice and I am 30 years old.');
});

test('Student prototype inherits from Person and works correctly', () => {
  const student = new Student('Bob', 20, 'Computer Science');
  expect(student.name).toEqual('Bob');
  expect(student.age).toEqual(20);
  expect(student.course).toEqual('Computer Science');
  expect(student.introduce()).toEqual('Hello, my name is Bob and I am 20 years old.');
  expect(student.study()).toEqual('I am studying Computer Science.');
});
