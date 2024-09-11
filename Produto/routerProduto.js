const express = require('express');
const router = express.Router();

const criarProduto = require('./criarProduto')
    router.post('/', criarProduto);

const listarProdutos = require('./listarProdutos')
    router.get('/', listarProdutos);
   
const atualizarProduto = require('./atualizarProduto')    
    router.put('/:id', atualizarProduto);

const deleteProduto = require('./deleteProduto')
    router.delete('/:id', deleteProduto);
    
module.exports = router   