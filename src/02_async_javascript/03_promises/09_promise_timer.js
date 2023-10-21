/*Problem: Implement a Promise-based Timer
Create a function called promiseTimer that takes a delay in milliseconds 
and returns a Promise. The Promise should resolve after the given 
delay and return a string "Done!".

Requirements:
- use setTimeout to implement the delay
- the returned Promise should resolve with a string "Done!"
*/

// !! MAKE SURE YOU KNOW HOW TO USE new Promise() - is a common challenge in the live coding interview  !!

function promiseTimer(delay) {
    // Implement this function
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

module.exports = promiseTimer;
