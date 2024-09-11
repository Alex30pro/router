const { fornecedores } = require('../data');

const deleteFornecedor = (req, res) => {
    const { id } = req.params;
    const index = fornecedores.findIndex(fd => fd.id == id);

    if (index === -1) {
        return res.status(404).send('Fornecedor não encontrado!');
    };

    const fornecedorDeletado = fornecedores.splice(index, 1)[0];

    res.status(200).send({mensagem: 'Fornecedor deletado com sucesso!', fornecedor: fornecedorDeletado});
};

module.exports = deleteFornecedor;