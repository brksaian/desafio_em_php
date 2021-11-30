drop database if exists php_login;
create database php_login;
use php_login;

create table usuarios(
	idusuarios int not null primary key auto_increment,
    nome varchar(45),
	senha varchar(45)
);

create table logs_acesso(
	idlogs int not null primary key auto_increment,
    descricao varchar(45),
    usuarios_idusuario int
);

create table clientes(
	idclientes int not null primary key auto_increment,
    nome varchar(45),
    cpf varchar(14),
    tipo varchar(1),
    dtnasc date,
    usuarios_idusuario int
);

create table telefones(
	idtelefones int not null primary key auto_increment,
    ddd varchar(2),
    fone varchar(9),
    tipo varchar(45),
    clientes_idClientes date,
    usuarios_idusuario int
);

create table enderecos(
	idenderecos int not null primary key auto_increment,
    logradouro varchar(100),
    numero varchar(5),
    complemento varchar(45),
    bairro varchar(45),
    cep varchar(8),
    cidade varchar(45),
    uf varchar(2),
    clientes_idClientes date,
    usuarios_idusuario int
);
