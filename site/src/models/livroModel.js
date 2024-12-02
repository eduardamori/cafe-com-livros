var database = require("../database/config")

function cadastrar(
    nome, autor, genero, qtdPaginas
) {
    var instrucaoSqlLivros = `INSERT INTO livros (nome, autor, genero, numPaginas) VALUES ('${nome}', '${autor}', '${genero}', '${qtdPaginas}');`;
    console.log("Inserindo na tabela livros: \n" + instrucaoSqlLivros);
    return database.executar(instrucaoSqlLivros).then((resultado) => {
        return resultado.insertId;
    }).catch((erro) => {
        console.error("Erro ao inserir o livro:", erro);
        throw erro;
    });
}

function cadastrarLivroUsuario(
    idUsuario, fkLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha
) {
    if (dtInicio == null) {
        var instrucaoSqlLivrosUsuarios = `
            INSERT INTO livro_usuario (fkUsuario, fkLivro, statusLivro) 
            VALUES ('${idUsuario}', '${fkLivro}', '${statusLivro}');
        `;
        console.log("Inserindo na tabela livros_usuario: \n" + instrucaoSqlLivrosUsuarios);
        return database.executar(instrucaoSqlLivrosUsuarios);
    } else {
        var instrucaoSqlLivrosUsuarios = `
            INSERT INTO livro_usuario (fkUsuario, fkLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha) 
            VALUES ('${idUsuario}', '${fkLivro}', '${dtInicio}', '${dtTermino}', '${estrelas}', '${statusLivro}', '${resenha}');
        `;
        console.log("Inserindo na tabela livros_usuario: \n" + instrucaoSqlLivrosUsuarios);
        return database.executar(instrucaoSqlLivrosUsuarios);
    }
}

function listarLivros(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.statusLivro,
        ifnull(lu.dtInicio, '-' ) as 'dtInicio', 
        ifnull(lu.dtTermino, '-' ) as 'dtTermino', 
        ifnull(lu.estrelas, '-') as 'estrelas',
        ifnull(lu.resenha, '-' ) as 'resenha'
        from livros as l 
        left join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorNomeCrescente(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario}
        order by l.nome;
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorNomeDecrescente(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario}
        order by l.nome desc;
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorMaiorAvaliacao(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario}
        order by lu.estrelas desc;
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorMenorAvaliacao(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario}
        order by lu.estrelas;
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorLido(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario} and statusLivro = 'lido';
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorNaoLido(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario} and statusLivro = 'nao lido';
    `;
    return database.executar(instrucaoSql);
}

function filtrarPorLendo(idUsuario) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario} and statusLivro = 'lendo';
    `;
    return database.executar(instrucaoSql);
}

function pesquisar(idUsuario, nome) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario} and l.nome like '${nome}%';
    `;
    return database.executar(instrucaoSql);
}

function atualizar(idLivro, nome, autor, genero, numPaginas) {
    var instrucaoSql = `
        UPDATE livros set nome = '${nome}', autor = '${autor}', genero = '${genero}', numPaginas = ${numPaginas}
        where idLivro = ${idLivro};
    `;
    return database.executar(instrucaoSql);
}

function atualizarLivrosUsuario(idUsuario, idLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha) {
    if (dtInicio == null || dtTermino == null) {
        var instrucaoSql = `
            UPDATE livro_usuario set estrelas = ${estrelas}, statusLivro = '${statusLivro}', resenha = '${resenha}'
            where fkUsuario = ${idUsuario} and fkLivro = ${idLivro};
        `;
    } else {
        var instrucaoSql = `
            UPDATE livro_usuario set dtInicio = '${dtInicio}', dtTermino = '${dtTermino}', estrelas = ${estrelas}, statusLivro = '${statusLivro}', resenha = '${resenha}'
            where fkUsuario = ${idUsuario} and fkLivro = ${idLivro};
        `;
    }
    return database.executar(instrucaoSql);
}

function buscar(idUsuario, idLivro) {
    var instrucaoSql = `
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero, l.numPaginas,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = ${idUsuario} and l.idLivro = ${idLivro};
    `;
    return database.executar(instrucaoSql);
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
    atualizarLivrosUsuario,
    buscar
};