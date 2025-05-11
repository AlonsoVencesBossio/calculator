

function dividir(a, b) {
    if (b === 0) return "Error";
    return a / b;
}

function testDividir() {
    const resultado = dividir(10, 2);
    console.assert(resultado === 5, `❌ Error: esperado 5, obtenido ${resultado}`);
    console.log("✅ Prueba de división superada.");
}

function testDividirPorCero() {
    const resultado = dividir(5, 0);
    console.assert(resultado === "Error", `❌ Error: esperado 'Error', obtenido ${resultado}`);
    console.log("✅ Prueba de división por cero superada.");
}


testDividir();
testDividirPorCero();
