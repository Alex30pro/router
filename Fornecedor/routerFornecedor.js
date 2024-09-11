const express = require('express');
const router = express.Router();

const criarFornecedor = require('./criarFornecedor')
    router.post('/', criarFornecedor);

const listarFornecedores = require('./listarFornecedores')
    router.get('/', listarFornecedores);
   
const atualizarFornecedor = require('./atualizarFornecedor')    
    router.put('/:id', atualizarFornecedor);

const deleteFornecedor = require('./deleteFornecedor')
    router.delete('/:id', deleteFornecedor);
    
module.exports = router    
    