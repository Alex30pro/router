const express = require('express');
const app = express();
const port = 3000
app.use(express.json());
app.use(nomeCaixaAlta)

const cepEndereco = require('./Middlewares/cepEndereco')
const nomeCaixaAlta = require('./Middlewares/nomeCaixaAlta');

app.post('/mercado', cepEndereco, (req, res) => {
    res.json(req.body)
})
  

app.listen(port, () => {
    console.log(`Servidor rodando na porta 3000`);
});