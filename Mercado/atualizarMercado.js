const { mercado } = require('../data');

const atualizarMercado = (req, res) => {
const { id } = req.params;
const novoNomeMercado = req.body.nomeMercado;
const novoEndereco = req.body.endereco;

const merca = mercado.find(f => f.id == id);

    if (!merca) {
        return res.status(404).send({ mensagem: 'Mercado não encontrado' });
    };

    merca.nomeMercado = novoNomeMercado;
    merca.endereco = novoEndereco;
    res.status(200).send({mensagem: 'Mercado atualizado com sucesso!', merca: merca});
};

module.exports = atualizarMercado;