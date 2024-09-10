const { fornecedor } = require('./data');

const deleteFornecedor = (req, res) => {
    const { id } = req.params;
    const index = fornecedor.findIndex(fd => fd.id == id);

    if (index === -1) {
        return res.status(404).send('Fornecedor não encontrado!');
    };

const funciDeletado = fornecedor.splice(index, 1)[0];

    fornecedor.forEach((fornecedores, index) => {
        if (fornecedores.fornecedoresId == id) {
        fornecedor.splice(index, 1);
    };
 });

    res.status(200).send({mensagem: 'Fornecedor deletado com sucesso!',fornecedo: funciDeletado});
};

module.exports = deleteFornecedor;