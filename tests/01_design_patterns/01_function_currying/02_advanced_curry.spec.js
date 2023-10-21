const curry = require('.../../../src/01_design_patterns/01_function_currying/02_advanced_curry.js');

test('Curry function is defined', () => {
  expect(typeof curry).toEqual('function');
});

test('Curries a function with two arguments', () => {
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  expect(curriedAdd(1)(2)).toEqual(3);
  expect(curriedAdd(1, 2)).toEqual(3);
});

test('Curries a function with three arguments', () => {
  const multiply = (a, b, c) => a * b * c;
  const curriedMultiply = curry(multiply);
  expect(curriedMultiply(2)(3)(4)).toEqual(24);
  expect(curriedMultiply(2, 3, 4)).toEqual(24);
});

test('Curries a function with four arguments', () => {
  const join = (a, b, c, d) => `${a}${b}${c}${d}`;
  const curriedJoin = curry(join);
  expect(curriedJoin('I')(' ')('am')(' happy')).toEqual('I am happy');
  expect(curriedJoin('I', ' ', 'am', ' happy')).toEqual('I am happy');
});
