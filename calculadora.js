function sumarNumeros(a, b) {
  return a + b;
}

function sumar() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  document.getElementById('resultado').innerText = sumarNumeros(a, b);
}

// Exportar para pruebas
if (typeof module !== 'undefined') {
  module.exports = { sumarNumeros };
}
