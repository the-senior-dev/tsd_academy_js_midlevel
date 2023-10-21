const borrowMethod = require('./../../../src/03_advanced_functions/02_call_apply_bind/14_borrow_method.js');

test('Borrows method from one object and applies it to another', () => {
  const greeting = borrowMethod();
  
  expect(greeting).toBe('Hello, John');
});
