const express = require('express');
const router = express.Router();

const criarFornecedor = require('../Fornecedor/criarFornecedor')
    router.post('/', criarFornecedor);

const listarFornecedor = require('../Fornecedor/listarFornecedor')
    router.get('/', listarFornecedor);
   
const atualizarFornecedor = require('../Fornecedor/atualizarFornecedor')    
    router.put('/:id', atualizarFornecedor);

const deleteFornecedor = require('../Fornecedor/deleteFornecedor')
    router.delete('/:id', deleteFornecedor);
    
module.exports = router    
    