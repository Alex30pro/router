const { mercados } = require('../data');

const deleteMercado = (req, res) => {
    const { id } = req.params;
    const index = mercados.findIndex(md => md.id == id);

    if (index === -1) {
        return res.status(404).send('Mercado não encontrado!');
    };

const mercadoDeletado = mercados.splice(index, 1)[0];

    res.status(200).send({mensagem: 'Mercado deletado com sucesso!', mercado: mercadoDeletado});
};

module.exports = deleteMercado;