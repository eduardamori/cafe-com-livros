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

CREATE TABLE livro_usuario (
fkUsuario int,
fkLivro int,
primary key (fkUsuario, fkLivro),
dtInicio date,
dtTermino date,
estrelas int,
resenha varchar(500),
constraint fkULivrosUsuario foreign key(fkUsuario) references usuario(idUsuario),
constraint fkLUsuarioLivros foreign key(fkLivro) references livros(idLivro)
);

ALTER TABLE usuario ADD CONSTRAINT chkGenero CHECK (generoFav in ('romance', 'fantasia', 'ficçao científica', 'suspense', 'poesia', 'ficção histórica', 'literatura clássica', 'terror', 'religião'));

SELECT * FROM usuario;