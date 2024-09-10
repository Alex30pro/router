const { fornecedor } = require('./data');

const listarFornecedor = (req, res) => {
    res.status(200).send(fornecedor);
};

module.exports = listarFornecedor;