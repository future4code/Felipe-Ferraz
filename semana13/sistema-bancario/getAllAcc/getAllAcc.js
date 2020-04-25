"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var handleGetAllAcc = function (err, data) {
    console.log(data);
    //   const fileContent = data.toString();
    //   console.log(fileContent);
};
var getAllAcc = function () {
    fs_1.readFile("./createAcc/createAcc.json", handleGetAllAcc);
};
getAllAcc();
