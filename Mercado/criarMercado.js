const { mercado } = require('./data');

function criarMercado(req, res) {
    console.log(req.body);

const novoMercado = {
    id: mercado.length + 1,
    nomeMercado: req.body.nomeMercado,
    endereco: req.body.endereco,

    };
    
    mercado.push(novoMercado) 
    res.status(201).send({mensagem: 'Mercado criado com sucesso!', mercados: novoMercado});
};

module.exports = criarMercado;