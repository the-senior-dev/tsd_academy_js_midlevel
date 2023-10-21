/* Part 1: Implement the Curry Function
Write a function named curry that takes a function fn as an argument. 
The curry function should return a new function that can take multiple arguments 
either all at once or one at a time. For example:
    function add(a, b) {
        return a + b;
    }
    const curriedAdd = curry(add);
    curriedAdd(1, 2); // 3
*/
function curry(fn) {
    // Your code here
}
  

// Example
/*
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output should be 6
console.log(curriedAdd(1, 2, 3)); // Output should also be 6
*/

module.exports = curry;

