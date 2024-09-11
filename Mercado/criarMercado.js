const { mercados } = require('../data');

function criarMercado(req, res) {
    console.log(req.body);

    const novoMercado = {
        id: mercados.length + 1,
        nomeMercado: req.body.nomeMercado,
        endereco: req.body.endereco,
    };
    
    mercados.push(novoMercado) 
    res.status(201).send({mensagem: 'Mercado criado com sucesso!', mercado: novoMercado});
};

module.exports = criarMercado;