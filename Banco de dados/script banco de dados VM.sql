CREATE DATABASE cafe_com_livros;

USE cafe_com_livros;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
dtNasc DATE,
senha varchar(45),
generoFav varchar(45)
);

CREATE TABLE livros (
idLivro int primary key auto_increment,
nome varchar(45),
autor varchar(45),
genero varchar(45),
numPaginas int
) auto_increment = 1000;

insert into livros (nome, autor, genero, numPaginas) value 
  ('Furia', 'Fallen', 'suspense', 200);


CREATE TABLE livro_usuario (
fkUsuario int,
fkLivro int,
primary key (fkUsuario, fkLivro),
dtInicio date,
dtTermino date,
estrelas int,
statusLivro varchar(45),
resenha varchar(500),
constraint fkULivrosUsuario foreign key(fkUsuario) references usuario(idUsuario),
constraint fkLUsuarioLivros foreign key(fkLivro) references livros(idLivro)
);

alter table livro_usuario add column dtCadastro datetime default current_timestamp();


insert into livro_usuario value 
  (1, 1008, null, null, null, 'não lido', null);
  
ALTER TABLE usuario ADD CONSTRAINT chkGenero CHECK (generoFav in ('romance', 'fantasia', 'ficçao científica', 'suspense', 'poesia', 'ficção histórica', 'literatura clássica', 'terror', 'religião'));
ALTER TABLE livro_usuario ADD CONSTRAINT chkStatus CHECK (statusLivro in ('lido', 'lendo', 'não lido'));

SELECT * FROM usuario;
select * from livros;
select * from livro_usuario;

SELECT count(*) as livros from livros join livro_usuario
on fkLivro = idLivro
 where fkUsuario = 1;
 



SELECT sum(numPaginas) as soma from livros join livro_usuario
on fkLivro = idLivro
where fkUsuario = 1;

SELECT 
        l.idLivro, l.nome, l.autor, l.genero, lu.statusLivro,
        ifnull(lu.dtInicio, '-' ) as 'dtInicio', 
        ifnull(lu.dtTermino, '-' ) as 'dtTermino', 
        ifnull(lu.estrelas, '-') as 'estrelas',
        ifnull(lu.resenha, '-' ) as 'resenha'
        from livros as l 
		right join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = 1;
        
    SELECT sum(numPaginas) as soma from livros join livro_usuario
    on fkLivro = idLivro
    join usuario
    on fkUsuario = idUsuario
    where fkUsuario = 1
    and statusLivro = 'Lido';
    
        SELECT sum(numPaginas) as soma from livros join livro_usuario
    on fkLivro = idLivro
    join usuario
    on fkUsuario = idUsuario
    where fkUsuario = 1;
    
SELECT l.nome, COUNT(l.nome) AS quantidade_cadastrada
FROM livro_usuario lu
JOIN livros l ON lu.fkLivro = l.idLivro
GROUP BY l.nome
ORDER BY quantidade_cadastrada desc;

SELECT l.genero, COUNT(l.nome) AS quantidade_cadastrada
FROM livro_usuario lu
right JOIN livros l ON lu.fkLivro = l.idLivro
GROUP BY l.genero
ORDER BY quantidade_cadastrada desc;

SELECT l.genero, COUNT(l.nome) AS quantidade_cadastrada
        FROM livro_usuario lu
        right JOIN livros l ON lu.fkLivro = l.idLivro
        join usuario
        on fkUsuario = idUsuario
        where fkUsuario = 1
        GROUP BY l.genero
        ORDER BY quantidade_cadastrada desc
        ;
        
SELECT l.autor, COUNT(l.nome) AS quantidade_cadastrada
        FROM livro_usuario lu
        right JOIN livros l ON lu.fkLivro = l.idLivro
        join usuario
        on fkUsuario = idUsuario
        where fkUsuario = 1
        GROUP BY l.autor
        ORDER BY quantidade_cadastrada desc
        limit 5;
        
        
        select * from usuario;
        
        select * from livro_usuario; 
        
update livro_usuario set dtTermino = '2024-03-20'
where fkLivro = 1007;

select date_format(dtTermino, '%Y-%m') AS mes,
count(*) as totalLivros
from livro_usuario
where fkUsuario = 1
group by dtTermino, date_format(dtTermino, '%Y-%m')
order by mes;

SELECT date_format(dtTermino, '%m') as mes,
        COUNT(lu.fkLivro) AS totalLivros,
    SUM(livros.numPaginas) AS totalPaginas
        FROM livro_usuario as lu JOIN livros
        on fkLivro = idLivro
        WHERE fkUsuario = 1
        GROUP BY dtTermino, date_format(dtTermino, '%m')
        ORDER BY mes;
        
SELECT statusLivro from livro_usuario
  where fkUsuario = 1;
  
SELECT statusLivro, COUNT(statusLivro) AS quantidade
FROM livro_usuario
where fkusuario = 1
GROUP BY statusLivro
-- ORDER BY quantidade_cadastrada desc
;

SELECT nome, autor from livros
join livro_usuario 
on fkLivro = idLivro
where fkUsuario = 1
order by dtCadastro
limit 8;


select * from usuario;
select * from livros;
select * from livro_usuario;

describe livro_usuario;

INSERT INTO livro_usuario (fkUsuario, fkLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha)
    VALUES ('1', '1033', null, null, '0', 'Nao lido', null);
    
    INSERT INTO livro_usuario (fkUsuario, fkLivro, dtInicio, dtTermino, estrelas, statusLivro, resenha)
        VALUES ('1', '1046', '2024-02-06', '2024-12-06', '4', 'Lido', 'livro bom demais mano slc tmj fi');
        
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = 1
        order by lu.estrelas desc;
        
        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = 1 and statusLivro = 'lido';
        
                SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = 1 and statusLivro = 'não lido';
        
                SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = 1 and statusLivro = 'lendo';
        
                        SELECT 
        l.idLivro, l.nome, l.autor, l.genero,
        lu.dtInicio, lu. dtTermino, lu.estrelas, lu.statusLivro, lu.resenha
        from livros as l 
        join livro_usuario as lu
        on l.idLivro = lu.fkLivro
        join usuario as u
        on u.IdUsuario = lu.fkUsuario
        where u.IdUsuario = 1 and l.nome like '%%';
        
        describe livro_usuario;
        
select * from livro_usuario;

        UPDATE livro_usuario set dtInicio = '2024-11-10', dtTermino = '2024-12-01', estrelas = 4, statusLivro = 'lido', resenha = null
        where fkusuario = 1 and fkLivro = 1002;