const startCounter = require('./../../../src/02_async_javascript/02_timer_functions/07_interval_counter.js');

// setting up console.log mocks
const consoleLog = jest.spyOn(console, "log").mockImplementation(() => {});


beforeEach(()=> {
  // reset mock before each test
  consoleLog.mockReset();
})

afterEach(()=> {
  // reset mock before each test
  consoleLog.mockReset();
})


test('Counts up to n at each interval', done => {  
  const counter = startCounter(3, 100);

  setTimeout(() => {
    expect(consoleLog).toHaveBeenCalledWith(1);
    expect(consoleLog).toHaveBeenCalledWith(2);
    expect(consoleLog).toHaveBeenCalledWith(3);
    expect(consoleLog).toHaveBeenCalledTimes(3);

    done();
  }, 550);  // Enough time for 3 intervals + a small buffer
});

test('Immediately prints "Invalid input" when n < 1', done => {
  const counter = startCounter(0, 100);

  setTimeout(() => {
    expect(consoleLog).toHaveBeenCalledWith("Invalid input");
    expect(consoleLog).toHaveBeenCalledTimes(1);

    done();
  }, 10);  // Much shorter than the delay
});
