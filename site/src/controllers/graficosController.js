var graficoModel = require("../models/graficoModel");

function resgatarTotalLivros(req, res) {
    var idUsuario = req.params.idUsuario;

    graficoModel.resgatarTotalLivros(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json({
                livros: resultado[0].livros
            });
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarTotalPaginas(req, res) {
    var idUsuario = req.params.idUsuario;

    graficoModel.resgatarTotalPaginas(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json({
                soma: resultado[0].soma
            });
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar as páginas! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarTotalPaginasLidas(req, res) {
    var idUsuario = req.params.idUsuario;

    graficoModel.resgatarTotalPaginasLidas(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json({
                somaLidos: resultado[0].somaLidos
            });
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar as páginas lidas! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarMaisAdicionados(req, res) {
    graficoModel.resgatarMaisAdicionados().then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao listar os mais adicionados! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarLivrosPorGenero(req, res) {
    var idUsuario = req.params.idUsuario;
    graficoModel.resgatarLivrosPorGenero(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao exibir os gêneros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarLivrosPorAutor(req, res) {
    var idUsuario = req.params.idUsuario;
    graficoModel.resgatarLivrosPorAutor(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao exibir os autores! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarLivrosPorMes(req, res) {
    var idUsuario = req.params.idUsuario;
    graficoModel.resgatarLivrosPorMes(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao exibir os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarPaginasPorMes(req, res) {
    var idUsuario = req.params.idUsuario;
    graficoModel.resgatarPaginasPorMes(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao exibir as paginas! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarStatusLivro(req, res) {
    var idUsuario = req.params.idUsuario;
    graficoModel.resgatarStatusLivro(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao exibir as paginas! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resgatarUltimosCadastros(req, res) {
    var idUsuario = req.params.idUsuario;
    graficoModel.resgatarUltimosCadastros(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.error("\nHouve um erro ao exibir as paginas! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    resgatarTotalLivros,
    resgatarTotalPaginas,
    resgatarTotalPaginasLidas,
    resgatarMaisAdicionados,
    resgatarLivrosPorGenero,
    resgatarLivrosPorAutor,
    resgatarLivrosPorMes,
    resgatarPaginasPorMes,
    resgatarStatusLivro,
    resgatarUltimosCadastros
}   