const { mercado } = require('./data');

const deleteMercado = (req, res) => {
    const { id } = req.params;
    const index = mercado.findIndex(md => md.id == id);

    if (index === -1) {
        return res.status(404).send('Mercado não encontrado!');
    };

const mercaDeletado = mercado.splice(index, 1)[0];

    mercado.forEach((mercados, index) => {
        if (mercados.mercadosId == id) {
        mercado.splice(index, 1);
    };
 });

    res.status(200).send({mensagem: 'Mercado deletado com sucesso!', mercados: mercaDeletado});
};

module.exports = deleteMercado;