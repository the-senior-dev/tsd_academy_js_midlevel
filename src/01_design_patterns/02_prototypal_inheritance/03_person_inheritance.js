/*
Problem: Implement Person and Student Prototypes
Objective:
You're tasked with creating two prototypes, Person and Student. 
The Student prototype should inherit from Person.

Requirements:
Implement a Person prototype with the following properties:

name: A string representing the name of the person.
age: A number representing the age of the person.

The Person prototype should also have a method:
- introduce(): Prints a string in the format "Hello, my name is [name] and I am [age] years old."

Implement a Student prototype that inherits from Person. It should have an additional property:
- course: A string representing the course that the student is enrolled in.

The Student prototype should also have its own method:
- study(): Prints a string in the format "I am studying [course]."
*/

function Person(name, age) {
    // Implement this function
}

Person.prototype.introduce = function () {
    // Implement this method
}

function Student(name, age, course) {
    // Implement this function
}

// Implement inheritance here

Student.prototype.study = function () {
    // Implement this method
}

module.exports = {
    Person,
    Student
};

