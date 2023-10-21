/*
Problem: Implement a Promisify Function
Create a function called promisify that takes a node-style callback-based function 
as an argument and returns a new function that returns a Promise.

Requirements:
The input function follows the node-style callback pattern: 
(arg1, arg2, ..., callback) => void 
where callback is of the form (error, result) => void.

The returned function should return a Promise that resolves with the result if 
the original function calls its callback with null as the first argument.
The Promise should reject with the error if the original function calls 
its callback with an error.
*/

function promisify(nodeStyleFunction) {
    // Implement this function
}

module.exports = promisify;
