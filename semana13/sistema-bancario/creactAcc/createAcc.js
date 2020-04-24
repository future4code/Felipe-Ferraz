"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var accounts = [];
// const name = process.argv[2];
// const dateOfBirth: string = process.argv[3];
// const cpf = Number(process.argv[4]);
var createAcc = {
    name: "Felipe",
    dateOfBirth: "07/10/1991",
    cpf: 1594530549,
    id: new Date().getTime()
};
fs_1.appendFileSync("createAcc.json", createAcc, "utf8");
