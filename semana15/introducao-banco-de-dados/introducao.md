### Exercício 1

Letra A: Os demais comandos dessa Query são:
NOT NULL, indicando que esse valor não pode ser nulo

Letra B: SHOW DATABASES retorna os bancos de dados do sistema, e SHOW TABLES retorna as tabelas do banco de dados atual

Letra C: O Comando SHOW Actor retorna um erro.
O correto é DESCRIBE Actor. Que retorna o a chave, o tipo e outras propriedades.

### Exercício 2

Letra A: INSERT INTO ACTOR
VALUES ('002', 'Glória Pires',1200000, "1963-08-23", 'female')
  
  
Letra B: Ocorreu o erro porque cada item da tabela necessita de um identificador único. Como já tem um item com o 002, não foi possível a operação.

Letra C:
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

a linha INSERT INTO ACTOR (id, name, salary), possui quantidades de valores diferentes do passado na linha Values.

\*\*\*Correção : INSERT INTO ACTOR (id, name, salary, date_birth, gender)

Letra D: faltou o name`INSERT INTO ACTOR (id, salary, birth_date, gender)`

\*\*\* Correção :`INSERT INTO ACTOR (id,name, salary, birth_date, gender)`

Letra E: A data está como number e não como Date

> Correção: "1979-03-26"

### Exercício 3

Letra A: `SELECT * from ACTOR WHERE gender = 'female`

Letra B : `SELECT salary from ACTOR WHERE name = 'Tony Ramos';`

Letra C: `SELECT * from ACTOR WHERE gender = 'invalid';`

Aparece uma tabela com os dados em null porque não existe nenhum cadastro com esse parâmetro específico

Letra D: `SELECT id, name, salary from ACTOR WHERE salary < 500000;`

letra E: O segundo parâmetro está escrito errado.

> Correção `SELECT id, name from ACTOR WHERE id = "002";`

### Exercício 4

Letra A:

`SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000`

Selecione tudo do banco de dados dos atores onde o nome começa com A ou começa com J e o salário seja maior que 300000

Letra B: `SELECT * from ACTOR WHERE name not LIKE "A%" and salary > 350000;`

Letra C: `SELECT * from ACTOR WHERE name LIKE "G%" or name LIKE "%g%`

Letra D: `SELECT * from ACTOR WHERE (name like "%A%" or name LIKE "%a%" or name like "%G%" or name LIKE "%g%" ) and salary BETWEEN 350000 and 900000;`

### Exercício 5

Letra A: O tipo text não tem um limite específico de tamanho, diferente do varchar

### Exercício 6

Letra A: `SELECT id, name, evaluation FROM Films WHERE id = '001'`

Letra B: `SELECT * from Films WHERE name = "O auto da Comparecida"`

Letra C : `SELECT id, name, synopsis from Films WHERE evaluation > 6`

### Exercício 7

Letra A : `SELECT * from Films WHERE name like "%vida%"`

Letra B: `SELECT * from Films WHERE name like "%TERMO DE BUSCA%"or synopsis like "%TERMO DE BUSCA%";`

Letra C: `SELECT * from Films WHERE release_date < CURDATE()`

letra D: `SELECT * from Films WHERE release_date < CURDATE() AND (name LIKE "%TERMO DE BUSCA" OR synopsis LIKE "%TERMO DE BUSCA") AND evaluation > 7;`
