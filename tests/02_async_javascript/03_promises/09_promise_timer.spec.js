const promiseTimer = require('./../../../src/02_async_javascript/03_promises/09_promise_timer.js');

test('Resolves after the given delay', async () => {
  const start = Date.now();
  
  await promiseTimer(100);
  
  const elapsed = Date.now() - start;

  expect(elapsed).toBeGreaterThanOrEqual(100);
});

test('Resolves with the string "Done!"', async () => {
  const result = await promiseTimer(100);
  
  expect(result).toBe("Done!");
});
