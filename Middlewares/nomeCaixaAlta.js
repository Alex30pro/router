const nomeCaixaAlta = (req, res, next) => {

    req.body.nome = req.body.nome.toUppercase()

    next()
}

module.exports = nomeCaixaAlta;