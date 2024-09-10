const { fornecedor } = require('./data');

function criarFornecedor(req, res) {
    console.log(req.body);

const novoFornecedor = {
    id: fornecedor.length + 1,
    nomeFornecedor: req.body.nomeFornecedor,

    };
    
    fornecedor.push(novoFornecedor) 
    res.status(201).send({mensagem: 'Funcionário criado com sucesso!', fornecedor: novoFornecedor});
};

module.exports = criarFornecedor;