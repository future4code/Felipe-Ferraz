import express, { Request, Response, response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex from "knex";

// configuração extensões
dotenv.config();

const app = express();
app.use(express.json());

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Método criar usuário

const createUserQueriebuild = async (
  userName: string,
  nickName: string,
  email: String
): Promise<void> => {
  await connection
    .insert({ id: null, userName, nickName, email })
    .into("TodoListUser");
};

const createUser = async (
  userName: string,
  nickName: string,
  email: String
): Promise<void> => {
  await connection.raw(`
  INSERT INTO TodoListUser()
  VALUES(
  null,
  '${userName}',
  '${nickName}',
  '${email}'
  )
  `);
};

app.put("/create-user", async (req: Request, res: Response) => {
  try {
    const userName = req.body.userName;
    const nickName = req.body.nickName;
    const email = req.body.email;
    await createUser(userName, nickName, email);
    res.status(200).send({ message: "usuario criado" });
    console.log(userName, nickName, email);
  } catch (error) {
    res.status(400).send({ "Ocorreu o erro": error.message });
  }
});

// buscar usuario pelo ID

const getUserById = async (id: number): Promise<void> => {
  const response = await connection.raw(`
  SELECT * FROM TodoListUser WHERE id = ${id}
  `);
  //console.log(response[0][0]);
};

const getUserByIdQuerieConstrutor = async (id: number): Promise<void> => {
  const response = await connection
    .select("*")
    .from("TodoListUser")
    .where({ id });
  //console.log(response);
};

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    await getUserByIdQuerieConstrutor(id);
  } catch (error) {
    res.status(400).send({ "Ocorreu o erro": error.message });
  }
});

const updateUserById = async (id: number, nickName: string): Promise<void> => {
  try {
    const response = await connection.raw(`
    UPDATE TodoListUser
    SET nickName = '${nickName}'
    WHERE id = ${id}
    `);
    console.log("nickName atualizado");
  } catch (error) {
    console.log(error);
  }
};

const updateUserByIdQuerieConstructor = async (
  id: number,
  nickName: string
) => {
  try {
    await connection("TodoListUser").update({ nickName }).where({ id });
    console.log("nickName atualizado");
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {};

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
