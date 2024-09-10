const axios = require("axios")

const cepEndereco = (req, res, next) => {
    
    axios.get(`viacep.com.br/ws/${req.body.cep}/json/`)
         .then((res) => {
        
            req.body.endereco = res.data

            delete req.body.cep

            next()
         })  

    console.log('no middleware de cep')      

    
}

module.exports = cepEndereco