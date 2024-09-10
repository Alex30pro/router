const { funcionarios } = require('./data');

function buscarFuncionario(req, res){
    const { dinheiro } = req.query;
    const trabalhador = funcionarios.filter(s => s.salario == dinheiro)

    if(trabalhador.length > 0){
        res.status(200).send(trabalhador);
    }else{
        res.status(400).send({
            mensagem: "Salario nao encontrado!!"
        })
    }
}
module.exports = buscarFuncionario;