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
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
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
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listarLivros(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.listarLivros(idUsuario).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros); // ha livros
        } else {
            res.status(204).json([]); // não ha livros
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
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
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizar(req, res) {
    var idLivro = req.params.idLivroServer;
    var nome = req.body.nomeServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var qtdPaginas = req.body.qtdPaginasServer;
    var fkLivro = req.body.fkLivroServer;
    var dtInicio = req.body.dtInicioServer;
    var dtTermino = req.body.dtTerminoServer;
    var estrelas = req.body.estrelasServer;
    var statusLivro = req.body.statusLivroServer;
    var resenha = req.body.resenhaServer;

    livroModel.atualizar(idLivro, nome, autor, genero, qtdPaginas).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })

    livroModel.atualizarLivrosUsuario(idUsuario, fkLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha).then((livros) => {
        if (livros.length > 0) {
            res.status(200).json(livros);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
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
    atualizar
}   