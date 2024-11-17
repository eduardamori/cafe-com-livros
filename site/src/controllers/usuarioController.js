var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var dtNasc = req.body.dtNascServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var generoFav = req.body.generoFavServer;

    usuarioModel.cadastrar(nome, email, dtNasc, senha, generoFav)
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

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                    res.json({
                        id: resultadoAutenticar[0].id,
                        nome: resultadoAutenticar[0].nome
                    });
                }
                else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválidos(s)");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    autenticar
}