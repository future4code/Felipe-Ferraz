import { readFile } from "fs";

const handleGetAllAcc = (err: Error, data: Buffer) => {
  console.log(data);
  const fileContent = data.toString();
  console.log(fileContent);
};

const getAllAcc = () => {
  readFile("./createAcc/createAcc.json", handleGetAllAcc);
};

getAllAcc();
