### Exercício 1

Letra A: Concordo que usar string seja melhor que números, dado que existe uma variedade muito grande de combinações com strings. Que torna o ID mais seguro.

Letra B:
import { v4 } from "uuid";

export default class GenerationID {
public generation(): string {
return v4();
}
}

### Exercício 2

Letra A: O código é utilizado para criar um novo usuário em uma tabela existente.
Para funcionar corretamente, é necessário passar para a função createUser um id, email e password.
Essa função comunica com o banco de dados através do knex, e Query Builder

Letra B: `CREATE TABLE User( id VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE );`

### Exercício 3

Letra A: A linha as string indica que irá receber uma string naquela linha. Precisamos de usar ela porque ocorre um erro sabendo que a chave pode também ser undefined. Sendo assim, usamos as string para "falarmos" que o dado em questão será string e não undefined.

Letra B:
import \* as jwt from "jsonwebtoken";

export default class Authenticator {
private static EXPIRES_IN = "1min";
public generateToken = (id: string): string => {
const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
expiresIn: Authenticator.EXPIRES_IN,
});

    return token;

};
}

### Exercício 4

app.post("/singup", async (req: Request, res: Response) => {
try {
const userData = {
email: req.body.email,
password: req.body.password,
};
if (!req.body.email || req.body.email.indexOf("@") === -1) {
throw new Error("Email inválido");
}
if (!req.body.password.length || req.body.password.length < 6) {
throw new Error("Senha com menos de 6 caracteres");
}
const idGeneration = new GenerationID();
const newId = idGeneration.generation();
const create = new UserDataBase();
create.createNewUser(newId, userData.email, userData.password);
const authenticator = new Authenticator();
const token = authenticator.generateToken(newId);
res.status(200).send({
token: token,
});
} catch (error) {
res.status(400).send({ message: error.message });
}
});

### Exercício 5

Letra A: public async getUserByEmail(email: string): Promise<any> {
const response = await this.connection()
.select("\*")
.from(UserDataBase.TABLE_NAME)
.where({ email });
return response[0];

Letra B:
const user = new UserDataBase();
const test = async () => {
const response = await user.getUserByEmail("felipdddde@gmail.com");
return console.log(response);
};
test();

### Exercício 7

Letra A: O as any significa que você irá receber alguma coisa, se não usa-la ocorre um erro porque o código julga que a informação pode ser undefined
