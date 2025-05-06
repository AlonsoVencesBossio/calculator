const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/calculadora.js', express.static('src/calculadora.js'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
