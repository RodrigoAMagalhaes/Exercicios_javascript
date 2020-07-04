CREATE TABLE usuarios(

    nome VARCHAR(50), email VARCHAR(100), idade INT    
); 

INSERT INTO usuarios(nome, email, idade) VALUES(

    "ALINE MARCELINO",
    "aline@gmail.com",
    25
);
SELECT * FROM usuarios WHERE idade = 8; // utilizando o WHERE conseguimos filtrar a busca
SELECT * FROM usuarios WHERE nome = "RODRIGO MAGALHAES";
SELECT *FROM usuarios WHERE idade >= 15;

SELECT * FROM nomedatabela; // seleciona todos os dados da tabela
SHOW DATABASES; //mostra todos os bancos
USE nomedobanco; // entra no banco
CREATE nomedobanco; // cria um banco
SHOW TABLES; // mostra as tabelas
DELETE FROM usuarios WHERE nome = "RODRIGO MAGALHAES"; // deleta um registro