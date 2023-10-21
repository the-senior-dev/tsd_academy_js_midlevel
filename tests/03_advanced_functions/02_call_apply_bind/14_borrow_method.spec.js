const borrowMethod = require('./borrowMethod');

test('Borrows method from one object and applies it to another', () => {
  const greeting = borrowMethod();
  
  expect(greeting).toBe('Hello, John');
});
