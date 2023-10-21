const timeExecution = require('../../../src/01_design_patterns/03_higher_order_functions/04_timed_execution');

// Test if timeExecution is a function
test('timeExecution function is defined', () => {
  expect(typeof timeExecution).toEqual('function');
});

// Test if timeExecution returns a function
test('timeExecution returns a function', () => {
  const timedFunc = timeExecution(() => {});
  expect(typeof timedFunc).toEqual('function');
});

// Test if the returned function returns the correct result
test('Returned function returns correct result', () => {
  const add = (a, b) => a + b;
  const timedAdd = timeExecution(add);
  const output = timedAdd(1, 2);
  expect(output.result).toEqual(3);
});

// Test if the returned function measures time
test('Returned function measures time', () => {
  const add = (a, b) => a + b;
  const timedAdd = timeExecution(add);
  const output = timedAdd(1, 2);
  expect(typeof output.time).toEqual('number');
  expect(output.time).toBeGreaterThanOrEqual(0);
});
