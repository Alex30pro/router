const { fornecedores } = require('../data');

const atualizarFornecedor = (req, res) => {
const { id } = req.params;
const novoNomeFornecedor = req.body.nomeFornecedor;

const fornecedor = fornecedores.find(f => f.id == id);

    if (!fornecedor) {
        return res.status(404).send({ mensagem: 'Fornecedor não encontrado' });
    };

    fornecedor.nomeFornecedor = novoNomeFornecedor;
    res.status(200).send({mensagem: 'Fornecedor atualizado com sucesso!', fornecedor: fornecedor});
};

module.exports = atualizarFornecedor;