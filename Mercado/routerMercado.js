const express = require('express');
const router = express.Router();

const criarMercado = require('./criarMercado')
    router.post('/', criarMercado);

const listarMercados = require('./listarMercados')
    router.get('/', listarMercados);
   
const atualizarMercado = require('./atualizarMercado')    
    router.put('/:id', atualizarMercado);

const deleteMercado = require('./deleteMercado')
    router.delete('/:id', deleteMercado);
    
module.exports = router   