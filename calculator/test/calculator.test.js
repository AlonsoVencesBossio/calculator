// tests/calculator.test.js

const { suma } = require('../src/calculator');

test('suma de 2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});