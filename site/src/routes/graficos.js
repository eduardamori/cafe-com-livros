var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/kpi/resgatar-total-livros/:idUsuario", function (req, res) {
    graficosController.resgatarTotalLivros(req, res);
});

router.get("/kpi/resgatar-total-paginas/:idUsuario", function (req, res) {
    graficosController.resgatarTotalPaginas(req, res);
});

router.get("/kpi/resgatar-total-paginas-lidas/:idUsuario", function (req, res) {
    graficosController.resgatarTotalPaginasLidas(req, res);
});

router.get("/kpi/resgatar-mais-adicionados", function (req, res) {
    graficosController.resgatarMaisAdicionados(req, res);
});

router.get("/resgatar-livros-por-genero/:idUsuario", function (req, res) {
    graficosController.resgatarLivrosPorGenero(req, res);
});

router.get("/resgatar-livros-por-autor/:idUsuario", function (req, res) {
    graficosController.resgatarLivrosPorAutor(req, res);
});

router.get("/resgatar-livros-por-mes/:idUsuario", function(req, res) {
    graficosController.resgatarLivrosPorMes(req, res);
});

router.get("/resgatar-paginas-por-mes/:idUsuario", function (req, res) {
    graficosController.resgatarPaginasPorMes(req, res);
});

router.get("/resgatar-status-livro/:idUsuario", function (req, res) {
    graficosController.resgatarStatusLivro(req, res);
});

router.get("/resgatar-ultimos-cadastros/:idUsuario", function (req, res) {
    graficosController.resgatarUltimosCadastros(req, res);
});

module.exports = router;