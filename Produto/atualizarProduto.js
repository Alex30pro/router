const { produtos } = require('../data');

const atualizarProduto = (req, res) => {
    const { id } = req.params;
    const novoNomeProduto = req.body.nomeProduto;
    const novaQuantidade = req.body.quantidade;
    const novoIdMercado = req.body.idMercado;
    const novoIdFornecedor = req.body.idFornecedor;
    
    const produto = produtos.find(pro => pro.id == id);
    
        if (!produto) {
            return res.status(404).send({ mensagem: 'Produto não encontrado' });
        };
    
        produto.nomeProduto = novoNomeProduto;
        produto.quantidade = novaQuantidade;
        produto.idMercado = novoIdMercado;
        produto.idFornecedor = novoIdFornecedor;
        
        res.status(200).send({mensagem: 'Produto atualizado com sucesso!', produto: produto});
    };
    
    module.exports = atualizarProduto;