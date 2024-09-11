const { produtos } = require('../data');

const deleteProduto = (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(pt => pt.id == id);

    if (index === -1) {
        return res.status(404).send('Produto não encontrado!');
    };

    const produtoDeletado = produtos.splice(index, 1)[0];

        produtos.forEach((produtos, index) => {
             if(produtos.id == id){
                 produtos.splice(index, 1)
            }

    res.status(200).send({mensagem: 'Produto deletado com sucesso!', produto: produtoDeletado});
    });
}

module.exports = deleteProduto;