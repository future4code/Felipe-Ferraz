### Exercício 1

Letra A: A resposta que temos ao usar o raw é uma típica do banco de dados, com um array envolvendo outro. Para ter acesso apenas ao parâmetro de interesse devemos capturar o primeiro array. Com isso usamos result [0][0]

Letra B: `const getActorByName = async (name: string): Promise <any> =>{ const result = await connect.raw(SELECT \* FROM Actor WHERE name = \'${name}')return result[0][0]}`

Letra C: `const getCountActorGender = asycn (gender : string): Promise <any> => { const result = await connect.raw(SELECT COUNT * FROM Actor WHERE gender = '${gender}') return result[0][0].count }`

### Exercício 2
