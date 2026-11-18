// math.test.js
const { add, divide } = require('./math');

describe('Math Engine Unit Tests', () => {
  test('adds 10 + 25 to equal 35', () => {
    expect(add(10, 25)).toBe(35);
  });

  test('divides 40 by 8 to equal 5', () => {
    expect(divide(40, 8)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is undefined');
  });
});