var database = require("../database/config")

function resgatarTotalLivros(idUsuario) {
    var instrucaoSql = `
        SELECT count(*) as livros from livros join livro_usuario
        on fkLivro = idLivro
        join usuario
        on fkUsuario = idUsuario
        where fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function resgatarTotalPaginas(idUsuario) {
    var instrucaoSql = `
        SELECT sum(numPaginas) as soma 
        from livros join livro_usuario
        on fkLivro = idLivro
        join usuario
        on fkUsuario = idUsuario
        where fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function resgatarTotalPaginasLidas(idUsuario) {
    var instrucaoSql = `
        SELECT sum(numPaginas) as somaLidos from livros join livro_usuario
        on fkLivro = idLivro
        join usuario
        on fkUsuario = idUsuario
        where statusLivro = 'Lido'
        and fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function resgatarMaisAdicionados() {
    var instrucaoSql = `
        SELECT l.nome, COUNT(l.nome) as quantidadeCadastrada
        FROM livro_usuario as lu
        JOIN livros as l ON lu.fkLivro = l.idLivro
        GROUP BY l.nome
        ORDER BY quantidadeCadastrada desc;
    `;
    return database.executar(instrucaoSql);
}

function resgatarLivrosPorGenero(idUsuario) {
    var instrucaoSql = `
        SELECT l.genero, COUNT(l.nome) AS quantidade_cadastrada
        FROM livro_usuario lu
        right JOIN livros l ON lu.fkLivro = l.idLivro
        join usuario
        on fkUsuario = idUsuario
        where fkUsuario = ${idUsuario}
        GROUP BY l.genero
        ORDER BY quantidade_cadastrada desc;
    `;
    return database.executar(instrucaoSql)
}

function resgatarLivrosPorAutor(idUsuario) {
    var instrucaoSql = `
        SELECT l.autor, COUNT(l.nome) AS quantidade_cadastrada
        FROM livro_usuario lu
        right JOIN livros l ON lu.fkLivro = l.idLivro
        join usuario
        on fkUsuario = idUsuario
        where fkUsuario = ${idUsuario}
        GROUP BY l.autor
        ORDER BY quantidade_cadastrada desc
        limit 5;
    `;
    return database.executar(instrucaoSql)
}

function resgatarLivrosPorMes(idUsuario) {
    var instrucaoSql = `
        SELECT date_format(dtTermino, '%m') as mes,
        count(*) as totalLivros
        FROM livro_usuario
        WHERE fkUsuario = ${idUsuario}
         and statusLivro = 'Lido'
        GROUP BY mes
        ORDER BY mes;
    `
    return database.executar(instrucaoSql)
}

function resgatarPaginasPorMes(idUsuario) {
    var instrucaoSql = `
        SELECT date_format(dtTermino, '%m') as mes,
        COUNT(lu.fkLivro) AS totalLivros,
        SUM(livros.numPaginas) AS totalPaginas
        FROM livro_usuario as lu JOIN livros
        on fkLivro = idLivro
        WHERE fkUsuario = ${idUsuario}
        and statusLivro = 'Lido'
        GROUP BY mes
        ORDER BY mes;
 `
    return database.executar(instrucaoSql)
}

function resgatarStatusLivro(idUsuario) {
    var instrucaoSql = `
        SELECT statusLivro, COUNT(statusLivro) AS quantidade
        FROM livro_usuario
        where fkusuario = ${idUsuario}
        GROUP BY statusLivro;
    `
    return database.executar(instrucaoSql)
}

function resgatarUltimosCadastros(idUsuario) {
    var instrucaoSql = `
        SELECT nome, autor from livros
        join livro_usuario 
        on fkLivro = idLivro
        where fkUsuario = ${idUsuario}
        order by dtCadastro desc
        limit 8;
    `
    return database.executar(instrucaoSql)
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