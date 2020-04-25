import { account } from "../types/accUser";
import { appendFileSync } from "fs";

const createAcc: account = {
  name: "Felipe",
  dateOfBirth: "07/10/1991",
  cpf: 1594530549,
  id: new Date().getTime(),
};

appendFileSync("createAcc.json", JSON.stringify(createAcc), "utf8");
