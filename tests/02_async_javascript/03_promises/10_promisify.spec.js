const promisify = require('./../../../src/02_async_javascript/03_promises/10_promisify');

test('Resolves when callback is called with null error', async () => {
  const asyncFunction = (value, callback) => {
    setTimeout(() => callback(null, value * 2), 50);
  };

  const promiseFunction = promisify(asyncFunction);

  const result = await promiseFunction(5);
  expect(result).toBe(10);
});

test('Rejects when callback is called with an error', async () => {
  const asyncFunction = (value, callback) => {
    setTimeout(() => callback(new Error('Something went wrong')), 50);
  };

  const promiseFunction = promisify(asyncFunction);

  await expect(promiseFunction(5)).rejects.toThrow('Something went wrong');
});
