const { fornecedores } = require('./data');

function criarFornecedor(req, res) {
    console.log(req.body);

const novoFornecedor = {
    id: fornecedores.length + 1,
    nomeFornecedor: req.body.nomeFornecedor,

    };
    
    fornecedores.push(novoFornecedor) 
    res.status(201).send({mensagem: 'Fornecedor criado com sucesso!', fornecedor: novoFornecedor});
};

module.exports = criarFornecedor;