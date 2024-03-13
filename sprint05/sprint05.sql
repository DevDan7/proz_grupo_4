CREATE TABLE mentorado (
  id_mentorado INT PRIMARY KEY,
  nome VARCHAR NOT NULL,
  cpf REAL NOT NULL,
  email VARCHAR NOT NULL,
  nacionalidade VARCHAR,
  plano_premium BOOLEAN
  );
  
CREATE TABLE mentor (
  id_mentor INT PRIMARY KEY,
  nome VARCHAR NOT NULL,
  cpf REAL NOT NULL,
  email VARCHAR NOT NULL,
  nacionalidade VARCHAR,
  especialidade VARCHAR NOT NULL
  ); 
  
CREATE TABLE especialidade (
  id_especialidade INT PRIMARY KEY,
  nome VARCHAR NOT NULL,
  ferramenta BOOLEAN,
  tempo_experiencia INT,
  empresa_atuaçao VARCHAR,
  conquistas VARCHAR,
  formaçao VARCHAR
  );
  
INSERT INTO mentorado
VALUES
(0001,'Luiza',12345678901,'luiza@gmail.com','portuguesa',TRUE),
(0002,'Bruna',23456789122,'bruna@gmail.com','brasileira',FALSE),
(0003,'Laura',34567891233,'laurasouza@yahoo.com','argentina',FALSE),
(0004,'Olga',45678912344,'olgalima@gmail.com','argentina',TRUE),
(0005,'Miguel',56789123455,'miguelito@gmail.com','portuguesa',FALSE),
(0006,'Arthur',67891234566,'arthur@live.com','uruguaia',TRUE),
(0007,'Leo',78912345677,'leo@gmail.com','brasileira',TRUE),
(0008,'Camila',89123456788,'camilaaa@gmail.com','brasileira',TRUE),
(0009,'Julia',25631478912,'ju@gmail.com','brasileira',TRUE);

SELECT * FROM mentorado

INSERT INTO mentor
VALUES
(0001,'Lorena',12345678911,'lorena@gmail.com','boliviana','HTML'),
(0002,'Ana',24681357923,'ananana@gmail.com','brasileira','HTML'),
(0003,'Claudio',97531258691,'claudinhoebuchecha@gmail.com','brasileira','SQL'),
(0004,'Ivone',96325874123,'ivonete@gmail.com','brasileira','Front-End'),
(0005,'Joao',136985214785,'joaopedefeijao@gmail.com','porto-riquenha','Carreira'),
(0006,'Paulo',85236974100,'paulopimenta@gmail.com','brasileira','Portfolio');

SELECT * FROM mentor

INSERT INTO especialidade
VALUES
(0001,'SQL','2 anos','Google','Mestrado em Banco de Dados','Análise de Sistemas',TRUE),
(0002,'HTML',TRUE),
(0003,'Front-End',FALSE),
(0004,'Carreira',FALSE),
(0005,'Portfólio',FALSE);

SELECT * FROM especialidade