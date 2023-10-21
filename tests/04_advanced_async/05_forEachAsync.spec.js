const forEachAsync = require('./../../src/04_advanced_async/05_forEachAsync');

test('forEachAsync works with an empty array', async () => {
  const arr = [];
  const results = [];
  
  await forEachAsync(arr, async (element) => {
    results.push(element * 2);
  });

  expect(results).toEqual([]);
});

test('forEachAsync works with a non-empty array', async () => {
  const arr = [1, 2, 3];
  const results = [];

  await forEachAsync(arr, async (element, index, originalArray) => {
    results.push(element * 2);
  });

  expect(results).toEqual([2, 4, 6]);
});

test('forEachAsync processes elements in order', async () => {
  const arr = [1, 2, 3];
  const results = [];

  await forEachAsync(arr, async (element) => {
    await new Promise(resolve => setTimeout(resolve, (4 - element) * 10));
    results.push(element);
  });

  expect(results).toEqual([1, 2, 3]);
});
