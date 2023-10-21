/*
Problem: Implement forEachAsync
Objective:
You're tasked with implementing a function called forEachAsync that behaves 
like the array forEach method but accepts an asynchronous callback function.

Requirements:
The function should take an array and an asynchronous callback function as arguments.
The function should execute the callback function for each element in the array, in order, 
and wait for each callback to execute before moving on to the next.
The callback function should be called with the current element, 
its index, and the original array.
The function should return a promise that resolves when all callbacks have completed.
*/

async function forEachAsync(array, callback) {
    // Implement this function
}

module.exports = forEachAsync;
