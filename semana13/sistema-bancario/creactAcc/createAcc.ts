import { account } from "../types/accUser";
import { appendFileSync } from "fs";

let accounts = [];

// const name = process.argv[2];
// const dateOfBirth: string = process.argv[3];
// const cpf = Number(process.argv[4]);

const createAcc: account = {
  name: "Felipe",
  dateOfBirth: "07/10/1991",
  cpf: 1594530549,
  id: new Date().getTime(),
};

appendFileSync("createAcc.json", createAcc, "utf8");
