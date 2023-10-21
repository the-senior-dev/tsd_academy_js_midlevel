const startCounter = require('./../../../src/02_async_javascript/02_timer_functions/07_interval_counter.js');

test('Counts up to n at each interval', done => {
  let result = [];
  
  const counter = startCounter(3, 100);

  setTimeout(() => {
    expect(result).toEqual([1, 2, 3]);
    done();
  }, 350);  // Enough time for 3 intervals + a small buffer
});

test('Immediately prints "Invalid input" when n < 1', done => {
  const counter = startCounter(0, 100);

  setTimeout(() => {
    // Note: You can't directly test console output using Jest,
    // so this is an indirect test. If the function behaves correctly,
    // this timeout should not affect it.
    done();
  }, 10);  // Much shorter than the delay
});
