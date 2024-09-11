const { fornecedores } = require('../data');

const listarFornecedores = (req, res) => {
    res.status(200).send(fornecedores);
};

module.exports = listarFornecedores;