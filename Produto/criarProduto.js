const { produtos } = require('../data');

function criarProduto(req, res) {
    console.log(req.body);

    const novoProduto = {
        id: produtos.length + 1,
        nomeProduto: req.body.nomeProduto,
        quantidade: req.body.quantidade,
        idMercado: req.body.idMercado,
        idFornecedor: req.body.idFornecedor,
    };
    
    produtos.push(novoProduto) 
    res.status(201).send({mensagem: 'Produto criado com sucesso!', produto: novoProduto});
};

module.exports = criarProduto;