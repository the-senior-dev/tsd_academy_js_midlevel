const curry = require('./../../../src/01_design_patterns/01_function_currying/01_easy_currying.js');

// Test if curry is a function
test('Curry function is defined', () => {
  expect(typeof curry).toEqual('function');
});

// Test curried function with two arguments
test('Curries an addition function', () => {
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  expect(curriedAdd(1)(2)).toEqual(3);
});

// Test curried function with two arguments passed all at once
test('Curries an addition function with all arguments at once', () => {
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  const result = curriedAdd(1);
  expect(result(2)).toEqual(3);
});
