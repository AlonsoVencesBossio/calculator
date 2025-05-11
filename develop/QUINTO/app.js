// app.js

/**
 * Script principal para la interfaz de usuario de la calculadora
 * 
 * Este archivo contiene las funciones para manipular la interfaz
 * de usuario de la calculadora y utiliza las funciones matemáticas
 * definidas en calculator.js
 */

// Variables de la calculadora
let displayValue = "0";
let displayElement = document.getElementById("display");

/**
 * Actualiza el contenido del display de la calculadora
 */
function updateDisplay() {
    displayElement.textContent = displayValue;
}

/**
 * Agrega un carácter a la pantalla
 * @param {string} value - El carácter a agregar
 */
function appendToDisplay(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

/**
 * Limpia la pantalla de la calculadora
 */
function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

/**
 * Borra el último carácter de la pantalla
 */
function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

/**
 * Calcula el resultado de la expresión en la pantalla
 */
function calculate() {
    try {
        displayValue = calculatorFunctions.evaluate(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}

// Inicializar la pantalla
updateDisplay();
