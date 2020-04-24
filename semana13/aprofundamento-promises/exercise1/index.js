"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var handleFileRead = function (err, data) {
    var fileContent = data.toString();
    console.log(fileContent);
};
fs_1.readdir("./textos", function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    files.map(function (text) {
        return fs_1.readFile("./textos/" + text, handleFileRead);
    });
});
