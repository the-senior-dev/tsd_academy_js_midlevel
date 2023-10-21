const fetchData = require('../../../src/02_async_javascript/04_async_await/11_async_fetcher.js');

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'some data' }),
  })
);

test('Fetches data after the given delay', async () => {
  const start = Date.now();
  
  const result = await fetchData('https://some.api/data', 100);
  
  const elapsed = Date.now() - start;
  
  expect(elapsed).toBeGreaterThanOrEqual(100);
  expect(result).toEqual({ data: 'some data' });
});

test('Fetches data without delay when not provided', async () => {
  const result = await fetchData('https://some.api/data');
  
  expect(result).toEqual({ data: 'some data' });
});
