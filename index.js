// Importação CommonJS modules
const express = require('express');

// Criar aplicação WEB express
const app = express();

// Rotas (End Points)
app.get('/', (req, res) => {
  console.log('Rota / foi chamada.');
  res.send('Esta é a rota raiz da aplicação!');
});

// Rodar a aplicação express na porta 3000
app.listen(3000, () => {
  console.log('A Aplicação está rodando na porta 3000.');
});
