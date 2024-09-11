const express = require('express');
const app = express();
const port = 3000
app.use(express.json());
app.use(nomeCaixaAlta)

const cepEndereco = require('./Middlewares/cepEndereco')
const nomeCaixaAlta = require('./Middlewares/nomeCaixaAlta');

const routerMercado = require('./Mercado/routerMercado');
    app.use('/mercados', cepEndereco, routerMercado);

const routerFornecedor = require('./Fornecedor/routerFornecedor');
    app.use('/fornecedores', routerFornecedor);   
    
const routerProduto = require('./Produto/routerProduto');
    app.use('/produtos', routerProduto);    

app.listen(port, () => {
    console.log(`Servidor rodando na porta 3000`);
});