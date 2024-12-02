var livroModel = require("../models/livroModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var qtdPaginas = req.body.qtdPaginasServer;

    livroModel.cadastrar(
        nome, autor, genero, qtdPaginas
    ).then(
        function (resultado) {
            res.json({
                idLivro: resultado
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro do livro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function cadastrarLivroUsuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var fkLivro = req.body.fkLivroServer;
    var dtInicio = req.body.dtInicioServer;
    var dtTermino = req.body.dtTerminoServer;
    var estrelas = req.body.estrelasServer;
    var statusLivro = req.body.statusLivroServer;
    var resenha = req.body.resenhaServer;

    livroModel.cadastrarLivroUsuario(idUsuario, fkLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro em livro usuario! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listarLivros(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.listarLivros(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorNomeCrescente(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorNomeCrescente(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtrar por nome crescente! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorNomeDecrescente(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorNomeDecrescente(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtrar por nome decrescente! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorMaiorAvaliacao(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorMaiorAvaliacao(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtar por maior avaliacao! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorMenorAvaliacao(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorMenorAvaliacao(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtar por menor avaliacao! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorLido(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorLido(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtrar por lido! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorNaoLido(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorNaoLido(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtrar por nâo lido! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrarPorLendo(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.filtrarPorLendo(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao filtrar por Lendo! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pesquisar(req, res) {
    var idUsuario = req.params.idUsuario;
    var nome = req.params.nome;

    livroModel.pesquisar(idUsuario, nome).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao pesquisar o livro! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizar(req, res) {
    var idLivro = req.params.idLivro;
    var nome = req.body.nomeServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var numPaginas = req.body.qtdPaginasServer;
    var dtInicio = req.body.dtInicioServer;
    var dtTermino = req.body.dtTerminoServer;
    var estrelas = req.body.estrelasServer;
    var statusLivro = req.body.statusLivroServer;
    var resenha = req.body.resenhaServer;
    var idUsuario = req.body.idUsuarioServer;

    livroModel.atualizar(idLivro, nome, autor, genero, numPaginas).then((livros) => {
        if (livros.length == 0) {
            res.status(400);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao atualizar o livro! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })

    livroModel.atualizarLivrosUsuario(idUsuario, idLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha).then((livros) => {
        if (livros.length == 0) {
            res.status(400)
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao atualizar o livro_usuario! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })

    res.status(200).json('ok')
}

function buscar(req, res) {
    var idLivro = req.params.idLivro;
    var idUsuario = req.params.idUsuario;

    livroModel.buscar(idUsuario, idLivro).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao buscar o livro! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    listarLivros,
    cadastrarLivroUsuario,
    filtrarPorNomeCrescente,
    filtrarPorNomeDecrescente,
    filtrarPorMaiorAvaliacao,
    filtrarPorMenorAvaliacao,
    filtrarPorLido,
    filtrarPorNaoLido,
    filtrarPorLendo,
    pesquisar,
    atualizar,
    buscar
}   