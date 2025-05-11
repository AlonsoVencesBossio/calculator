

function testSumar() {
    const resultado = sumar(2, 3);
    console.assert(resultado === 5, `❌ Error: esperado 5, obtenido ${resultado}`);
    console.log("✅ Prueba de suma superada.");
}


function sumar(a, b) {
    return a + b;
}


testSumar();
