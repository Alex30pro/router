const { mercados } = require('../data');

const atualizarMercado = (req, res) => {
const { id } = req.params;
const novoNomeMercado = req.body.nomeMercado;
const novoEndereco = req.body.endereco;

const mercado = mercados.find(f => f.id == id);

    if (!mercado) {
        return res.status(404).send({ mensagem: 'Mercado não encontrado' });
    };

    mercado.nomeMercado = novoNomeMercado;
    mercado.endereco = novoEndereco;
    res.status(200).send({mensagem: 'Mercado atualizado com sucesso!', mercado: mercado});
};

module.exports = atualizarMercado;