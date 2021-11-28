var filmeModel = require("../models/filmeModel");


function cadastrarFilme(req, res) {
    var fkFilme = req.body.fkFilme;
    var fkUsuario = req.body.fkUsuario;

    filmeModel.cadastrarFilme(fkUsuario, fkFilme)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function metrica(req, res) {

    filmeModel.metrica()
        .then(function (resultado) {
            return res.json(resultado);
        })
        .catch(function (erro) {
            return res.json(erro);
        })
}

module.exports = {
    cadastrarFilme,
    metrica
}