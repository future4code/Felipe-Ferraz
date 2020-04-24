"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var baseUrl = "https://jsonplaceholder.typicode.com/posts/";
var firstId = Number(process.argv[2]);
var secondId = Number(process.argv[3]);
var thirdId = Number(process.argv[4]);
var promise1 = axios_1["default"].get(baseUrl + firstId);
var promise2 = axios_1["default"].get(baseUrl + secondId);
var promise3 = axios_1["default"].get(baseUrl + thirdId);
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values.map(function (el) {
        return el.data;
    }));
});
console.log(firstId, secondId, thirdId);
