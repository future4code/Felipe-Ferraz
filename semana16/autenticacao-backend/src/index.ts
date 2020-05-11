import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import GenerationID from "./service/GenerationID";
import CreateUser from "./data/CreateUser";
import Authenticator from "./service/Authenticator";

dotenv.config();

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

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const idGeneration = new GenerationID();
const newId = idGeneration.generation();

const create = new CreateUser();

const newUser = async () => {
  await create.createNewUser(newId, "123", "felipe@gmail.com");
};

console.log(newId);

const authenticator = new Authenticator();
const token = authenticator.generateToken(newId);
console.log(token);

console.log(authenticator.verify(token));
