const { produtos } = require('../data');

const listarProdutos = (req, res) => {
    res.status(200).send(produtos);
};

module.exports = listarProdutos;