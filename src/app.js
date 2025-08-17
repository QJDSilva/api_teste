const express = require('express');
const app = express();

app.use(express.json());

// Rota simples
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

// Rota de soma
app.get('/soma', (req, res) => {
  const { a, b } = req.query;
  const soma = Number(a) + Number(b);
  res.json({ resultado: soma });
});

module.exports = app;
