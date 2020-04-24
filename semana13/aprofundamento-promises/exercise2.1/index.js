"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var baseUrl = "https://jsonplaceholder.typicode.com/posts/";
var id = Number(process.argv[3]);
var method = process.argv[2];
var promise1;
switch (method) {
    case "getPost":
        promise1 = axios_1["default"].get(baseUrl + id);
        console.log("fui chamado");
        break;
    default:
        console.log("fui chamado default");
}
Promise.all([promise1]).then(function (value) {
    console.log(value.map(function (el) {
        return el.data;
    }));
});
console.log(method, id);
