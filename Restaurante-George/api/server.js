const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/exemplo', (req, res) => {
  res.json({ mensagem: 'Esta é uma resposta da rota GET da API' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});