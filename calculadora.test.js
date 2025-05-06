const { sumarNumeros } = require('../src/calculadora');

test('Suma 2 + 3 = 5', () => {
  expect(sumarNumeros(2, 3)).toBe(5);
});
