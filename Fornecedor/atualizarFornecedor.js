const { fornecedor } = require('../data');

const atualizarFornecedor = (req, res) => {
const { id } = req.params;
const novoNomeFornecedor = req.body.nomeFornecedor;

const forne = fornecedor.find(f => f.id == id);

    if (!forne) {
        return res.status(404).send({ mensagem: 'Funcionário não encontrado' });
    };

    forne.nomeFornecedor = novoNomeFornecedor;
    res.status(200).send({mensagem: 'Funcionário atualizado com sucesso!', forne: forne});
};

module.exports = atualizarFornecedor;