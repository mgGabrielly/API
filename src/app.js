// Importação CommonJS modules
const express = require('express');

// Criar aplicação WEB express
const app = express();

// Rotas (End Points)
app.get('/', (req, res) => {
  // console.log('Rota / foi chamada.');
  res.send('Esta é a rota raiz da aplicação!');
});

// Exportar a aplicação
module.exports = app;
