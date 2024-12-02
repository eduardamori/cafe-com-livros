var express = require("express");
var router = express.Router();

var livrosController = require("../controllers/livrosController");

router.post("/cadastrar", function (req, res) {
    livrosController.cadastrar(req, res);
});

router.post("/cadastrar-livro-usuario", function (req, res) {
    livrosController.cadastrarLivroUsuario(req, res);
});

router.get("/buscar-livro/:idLivro/:idUsuario", function (req, res) {
    livrosController.buscar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    livrosController.listarLivros(req, res);
});

router.get("/listar/:idUsuario/nome-crescente", function (req, res) {
    livrosController.filtrarPorNomeCrescente(req, res);
});

router.get("/listar/:idUsuario/nome-decrescente", function (req, res) {
    livrosController.filtrarPorNomeDecrescente(req, res);
});

router.get("/listar/:idUsuario/maior-avaliacao", function (req, res) {
    livrosController.filtrarPorMaiorAvaliacao(req, res);
});

router.get("/listar/:idUsuario/menor-avaliacao", function (req, res) {
    livrosController.filtrarPorMenorAvaliacao(req, res);
});

router.get("/listar/:idUsuario/lido", function (req, res) {
    livrosController.filtrarPorLido(req, res);
});

router.get("/listar/:idUsuario/nao-lido", function (req, res) {
    livrosController.filtrarPorNaoLido(req, res);
});

router.get("/listar/:idUsuario/lendo", function (req, res) {
    livrosController.filtrarPorLendo(req, res);
});

router.get("/listar/:idUsuario/pesquisar/:nome", function (req, res) {
    livrosController.pesquisar(req, res);
});

router.post("/atualizar-livro/:idLivro", function (req, res) {
    livrosController.atualizar(req, res);
});

module.exports = router;