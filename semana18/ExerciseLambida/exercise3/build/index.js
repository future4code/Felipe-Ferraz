"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(Number(event.num1) + Number(event.num2)),
    };
    return response;
};
