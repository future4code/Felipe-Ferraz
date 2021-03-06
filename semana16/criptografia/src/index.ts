import dotenv from "dotenv";
import express, { Response, Request } from "express";
import { AddressInfo } from "net";
import GenerationID from "./service/GenerationID";
import UserDataBase from "./data/UserDataBase";
import Authenticator from "./service/Authenticator";
import BaseDataBase from "./baseDataBase/BaseDataBase";
import HashManager from "./service/HashManager";

dotenv.config();

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

app.post("/login", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };
    if (!userData.email || userData.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }
    const login = new UserDataBase();
    const resLogin = await login.login(userData.email, userData.password);
    const authenticator = new Authenticator();
    const token = authenticator.generateToken(resLogin.id);

    res.status(200).send({ token: token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
  await BaseDataBase.destroyConnection();
});

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
  await BaseDataBase.destroyConnection();
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.body.token;
    const getId = new Authenticator();
    const id = getId.verify(token);
    const data = new UserDataBase();
    const dataProfile = await data.getUserByID(id);
    res.status(200).send({ id: dataProfile.id, email: dataProfile.email });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
  await BaseDataBase.destroyConnection();
});

// testando bcryptjs
const test = "testandoABiblioteca";
const hashManager = new HashManager().setHas(test);
