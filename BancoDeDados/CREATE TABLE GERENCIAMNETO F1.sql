--DDL => DATA DEFINITION LANGUAGE ;
--CREATE , ALTER , DROP ;
--CREATE = CRIAR ;
--ALTHER = ALTERAR ;
--DROP = LARGAR ( EXCLUIR ) ;
-- DATA BASE => BANCO DE DADOS;
-- TABLE = TABELA ;


--COMADOS BASICO SQL 
--CRIANDO BANCO DE DADOS 
CREATE DATABASE escola;
CREATE DATABASE hospital;
CREATE DATABASE lojaDeRoupas;
-- 

--USANDO BANCO DE DADOS 
USE	escola;
USE gerencimaneto_f1;
--

--ALTERANDO NOMES USANDO 'MODYFY NAME' 
ALTER DATABASE escola MODIFY NAME = DBEscola;
ALTER DATABASE lojaDeRoupas MODIFY NAME = lojaDeRoupasEsquina;
ALTER DATABASE hospital MODIFY NAME = DBHospital;
--

--Deletar Banco de Dados 
DROP DATABASE DBEscola;
DROP DATABASE DBHospital;
DROP DATABASE lojaDeRoupasEsquina;
--
--Criar Tabelas 
USE gerencimaneto_f1;
CREATE TABLE Equipes(
--IDENTITY VAI INCREMENTAR AUTOMATICAMENTE A KEY 
--ULTIMA LINHA DE COMANDO NAO PODE TER FIRGULA','
	id_equipe INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	nome VARCHAR(255) NOT NULL,
	pais VARCHAR(20),
	chefe_equipe VARCHAR(255)
);
CREATE TABLE Pilotos(
	id_piloto INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	pais VARCHAR(20),
	data_nascimento DATE,
	nascionalidade VARCHAR(100),
	--USAR O ID DA EQUIPE 
	id_equipe INT,
	FOREIGN KEY (id_equipe) REFERENCES Equipes(id_equipe)
	);
CREATE TABLE Plitos_esquipes(
	id_piloto INT NOT NULL,
	id_equipe INT NOT NULL,
	PRIMARY KEY (id_piloto,id_equipe),
	FOREIGN KEY (id_piloto) REFERENCES Pilotos(id_piloto),
	FOREIGN KEY (id_equipe) REFERENCES Equipes(id_equipe)
);
CREATE TABLE Circuito(
	id_circuito INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	nome VARCHAR(255) NOT NULL,
	local_circuito VARCHAR(255),
	comprimeto DECIMAL(10,2)
);
CREATE TABLE Corridas(
	id_corrida INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	nome VARCHAR(255) NOT NULL,
	date_corrida DATE NOT NULL,
	id_circuito INT NOT NULL,
	FOREIGN KEY (id_circuito) REFERENCES Circuito(id_circuito)
 );
CREATE TABLE Result(
	id_result INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	id_corrida INT NOT NULL,
	id_piloto INT NOT NULL,
	posicao INT NOT NULL,
	tempo TIME ,
	FOREIGN KEY (id_piloto) REFERENCES Pilotos(id_piloto),
	FOREIGN KEY (id_corrida) REFERENCES Circuito(id_circuito)
);