### Exercício 1

Letra A: `ALTER TABLE Actors DROP COLUMN salary`

Remove a coluna de salário da tabela Actores

Letra B: `ALTER TABLE Actors CHANGE gender sex VARCHAR(6);`

Altera o nome do valor gender para sex

Letra C: `ALTER TABLE Actors CHANGE gender gender VARCHAR(255)`

Altera a quantidade de caracteres do valor gender para 255

Letra D: `ALTER TABLE Actores CHANGE gender gender VARCHAR(100)`

### Exercício 2

Letra A : `UPDATE Actor SET name = 'novo nome', birth_date = 'nova data' WHERE id = '003'`

Letra B: `UPDATE Actor SET name = 'JULIANA PAES' WHERE name = 'Juliana Paes'`

`UPDATE Actor SET name = Juliana Paes WHERE name = 'JULIANA PAES'`

Letra C: `UPDATE Actor SET name='novo Nome' birth_date='nova data', salary = 'novo salário gender = 'novo genero' WHERE id = '005'`

### Exercício 3

Letra A: `DELETE FROM Actor WHERE name = 'Fernanda Montenegro'`

Letra B: `DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000`

### Exercício 4

Letra A: `SELECT MAX(salary) FROM Actor`

Letra B: `SELECT MIN(salary) FROM Actor WHERE gender = 'female'`

Letra C: `SELECT Count(*) FROM Actor WHERE gender = 'female'`

Letra D: `SELECT SUM(salary)FROM Actor`

OBS: 1 ORDER, depois LIMIT, depois WHERE

### Exercicio 5

Letra A: A query retorna uma tabela de dois grupos com a quantidade de atores cadastrados nos gêneros femininos e masculinos.

Letra B: `SELECT id, name FROM Actor ORDER BY name DESC`

Letra C : `SELECT * FROM Actor ORDER BY salary`

Letra D: `SELECT * FROM Actor ORDER BY salary DESC LIMIT 3`

Letra E: `SELECT AVG(salary), gender FROM Actor GROUP BY gender`

### Exercício 6

Letra A: `ALTER TABLE Movie ADD playing_limit_date VARCHAR(255)`

Letra B: `ALTER TABLE Movie change evaluation evaluation FLOAT;`

Letra C: `UPDATE Movie SET playing_limit_date = "01-06-2001" WHERE id = "004";`

`UPDATE Movie SET playing_limit_date = "10-10-2020" WHERE id = "001";`

Leetra D: `DELETE from Movie WHERE id = "002";`

`UPDATE Movie SET synopsis = "testando filme deletado" WHERE id = "002";`

0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0 >> Deu resposta ok, entretanto nenhuma linha foi afetada.
Portanto não foi adicionada/ atualizada nenhuma linha na tabela

### Exercício 7

Letra A:
`SELECT * from Movie WHERE evaluation > 7.5;`

Letra B: `SELECT AVG(evaluation) from Movie;`

Letra C: `SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();`

Letra D: `SELECT COUNT(*) FROM Movie WHERE playing_limit_date < CURDATE();`

Letra E: `SELECT MAX(evaluation) FROM Movie`

Letra F: `SELECT MIN(evaluation) FROM Movie`

### Exercicio 8

Letra A : `SELECT * FROM Movie ORDER BY name;`
Letra B: `SELECT * FROM Movie ORDER BY NAME DESC LIMIT 5;`

Letra C: `SELECT * FROM Films ORDER BY release_date desc LIMIT 3;`

Letra D: `SELECT * FROM Films ORDER BY evaluation DESC LIMIT 3;`
