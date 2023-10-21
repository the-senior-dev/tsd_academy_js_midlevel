const objectManipulator = require('./../../../src/03_advanced_functions/01_the_this_object/13_thisInNormalFunction.js');

test('Understands the value of this in a normal function', () => {
  const obj = { value: 5 };
  
  function multiply() {
    return this.value * 2;
  }
  
  const [directCallResult, methodCallResult] = objectManipulator(obj, multiply);
  
  expect(directCallResult).toBeNaN();  // Because `this.value` will be undefined in a direct call
  expect(methodCallResult).toBe(10);   // Because `this.value` will be 5 when called as a method of `obj`
});
