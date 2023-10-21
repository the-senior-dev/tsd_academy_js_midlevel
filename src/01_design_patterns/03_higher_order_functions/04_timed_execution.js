/* Higher-Order Functions
Exercise: Create a Higher-Order Function named timeExecution
Objective:
Your task is to create a higher-order function named timeExecution that takes 
a function as an argument and returns a new function. When the new function is called, 
it should measure the time taken for the argument function to execute 
and then return that time along with the result of the function.

Requirements:
The function timeExecution should accept a function fn as its parameter.
The returned function should accept any number of arguments.
The returned function should measure the time before and after the function fn executes.
The returned function should return an object containing two properties:
result: The result of the function fn
time: The time taken for fn to execute in milliseconds
*/

function timeExecution(fn) {
    // Your code here
    return function(...args){
        const start = new Date();
        const result = fn(...args);
        const time = new Date() - start;
        return {result, time}
    }
}

// Example
/*
const add = (a, b) => a + b;
const timedAdd = timeExecution(add);
const output = timedAdd(3, 4); // { result: 7, time: 0.1234 }
console.log(output);
*/

// Output should be something like { result: 7, time: 0.1234 }

module.exports = timeExecution;