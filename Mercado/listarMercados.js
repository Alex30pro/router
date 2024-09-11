const { mercados } = require('../data');

const listarMercados = (req, res) => {
    res.status(200).send(mercados);
};

module.exports = listarMercados;