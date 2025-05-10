// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que se recargue la página

        // Capturamos los valores ingresados
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validaciones básicas
        if (nombre === '' || correo === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validarEmail(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Simular envío exitoso
        alert(Gracias por contactarme, ${nombre}. ¡Tu mensaje ha sido enviado exitosamente!);

        // Limpiar el formulario
        form.reset();
    });

    // Función para validar el formato del correo electrónico
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
