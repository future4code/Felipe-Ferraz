### Exércicio 1

Letra A: Chave estrangeira é uma linha de uma tabela que faz referência a um valor em outra.

Letra B: `CREATE TABLE Rating( id VARCHAR (255) PRIMARY KEY, comment TEXT NOT NULL, movie_id VARCHAR (255), FOREIGN KEY (movie_id) REFERENCES Films(id) );`

`INSERT INTO Rating() VALUES( "003", "Não gostei do final", "004" );`

Letra C: Não foi possível realizar a solicitação porque o valor da FOREIGN KEY é inválido

Letra D: `ALTER TABLE Films DROP COLUMN evaluation;`

Letra E: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_felipe_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Films` (`id`))

Não é possível atualizar ou apagar uma linha que possui valor como referência em outra chave

### Exercício 2

Letra A: Essa tabela vai relacionar o ator com o filme, vendo que 1 ator pode fazer parte de vários filmes e vice-versa.

Letra B: `INSERT INTO MovieCast() VALUES( "001", "005" );`

Letra C: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_felipe_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `ACTOR` (`id`))

Não foi possível realizar a solicitação porque o valor da FOREIGN KEY é inválid

Letra D: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_felipe_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `ACTOR` (`id`))

Não é possível atualizar ou apagar uma linha que possui valor como referência em outra chave

### Exercício 3

Letra A: o ON significa ONDE, pega tudo ON table1.id = table2.foregnkey.id

Letra B: `SELECT name, Films.id, comment FROM Films INNER JOIN Rating ON Films.id = Rating.id`;

### Exercício 4

Letra A: `SELECT f.name, f.id, r.comment FROM Films f LEFT JOIN Rating r ON f.id = r.id;`

Letra B: `SELECT Films.id, Films.name , MovieCast.actor_id FROM Films RIGHT JOIN MovieCast ON MovieCast.movie_id = Films.id;`
