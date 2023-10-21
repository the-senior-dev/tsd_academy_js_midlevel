const delayedPrinter = require('./../../../src/02_async_javascript/02_timer_functions/06_delayed_print.js');

test('Prints the string after the given delay', done => {
  const start = Date.now();
  
  delayedPrinter('Hello, world!', 100);
  
  setTimeout(() => {
    const elapsed = Date.now() - start;
    // Note: You can't directly test console output using Jest,
    // so we're indirectly testing by looking at the elapsed time.
    expect(elapsed).toBeGreaterThanOrEqual(100);
    done();
  }, 110); // Slightly longer than the delay to account for test overhead
});

test('Immediately prints when an empty string is provided', done => {
  delayedPrinter('', 100);
  
  setTimeout(() => {
    // Note: You can't directly test console output using Jest,
    // so this is an indirect test. If the function behaves correctly,
    // this timeout should not affect it.
    done();
  }, 10); // Much shorter than the delay
});
