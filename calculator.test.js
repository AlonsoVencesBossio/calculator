// calculator.test.js
const calculatorFunctions = require('./calculator');

/**
 * Suite de pruebas para las funciones de la calculadora
 * 
 * Estas pruebas verifican el funcionamiento correcto de las operaciones
 * matemáticas básicas implementadas en nuestra calculadora.
 */

// Prueba para la función de suma
test('La función suma debe sumar correctamente dos números', () => {
  // Arrange
  const a = 5;
  const b = 3;
  const expectedResult = 8;
  
  // Act
  const result = calculatorFunctions.add(a, b);
  
  // Assert
  expect(result).toBe(expectedResult);
});

// Prueba para la función de resta
test('La función resta debe restar correctamente dos números', () => {
  // Arrange
  const a = 10;
  const b = 4;
  const expectedResult = 6;
  
  // Act
  const result = calculatorFunctions.subtract(a, b);
  
  // Assert
  expect(result).toBe(expectedResult);
});

// Prueba para la función de multiplicación
test('La función multiplicación debe multiplicar correctamente dos números', () => {
  // Arrange
  const a = 7;
  const b = 6;
  const expectedResult = 42;
  
  // Act
  const result = calculatorFunctions.multiply(a, b);
  
  // Assert
  expect(result).toBe(expectedResult);
});

// Prueba para la función de división
test('La función división debe dividir correctamente dos números', () => {
  // Arrange
  const a = 15;
  const b = 3;
  const expectedResult = 5;
  
  // Act
  const result = calculatorFunctions.divide(a, b);
  
  // Assert
  expect(result).toBe(expectedResult);
});

// Prueba para verificar la división por cero
test('La función división debe lanzar un error al dividir por cero', () => {
  // Arrange
  const a = 10;
  const b = 0;
  
  // Act & Assert
  expect(() => {
    calculatorFunctions.divide(a, b);
  }).toThrow('División por cero');
});

// Prueba para la función de evaluación de expresiones
test('La función evaluate debe calcular correctamente expresiones matemáticas', () => {
  // Arrange
  const expression = '2 + 3 * 4';
  const expectedResult = 14; // Se espera 14 porque la multiplicación tiene precedencia
  
  // Act
  const result = calculatorFunctions.evaluate(expression);
  
  // Assert
  expect(result).toBe(expectedResult);
});
