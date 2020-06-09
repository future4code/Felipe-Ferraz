"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = (event) => {
    let response;
    if (event.email.indexOf("@") === -1) {
        response = {
            isEmail: false,
            reason: "Não possui '@' ",
        };
    }
    if (event.email.indexOf(".") === -1) {
        response = {
            isEmail: false,
            reason: "Não possui '.' ",
        };
    }
    if (event.email.indexOf(".") !== -1 && event.email.indexOf("@") !== -1) {
        response = {
            isEmail: true,
        };
    }
    return response;
};
