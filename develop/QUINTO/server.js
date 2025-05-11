// server.js

/**
 * Servidor web simple para la aplicación de calculadora
 * 
 * Este servidor utiliza Express para servir los archivos estáticos
 * de nuestra aplicación de calculadora.
 */

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static('./'));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
