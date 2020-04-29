"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Commerce_1 = require("../Commerce/Commerce");
var ComercialClient = /** @class */ (function (_super) {
    __extends(ComercialClient, _super);
    function ComercialClient(cnpj, name, registrationNumber, consumedEnergy, floorsQuantity, cep) {
        var _this = _super.call(this, floorsQuantity, cep) || this;
        _this.cnpj = cnpj;
        _this.name = name;
        _this.registrationNumber = registrationNumber;
        _this.consumedEnergy = consumedEnergy;
        return _this;
    }
    ComercialClient.prototype.getCnpj = function () {
        return this.cnpj;
    };
    ComercialClient.prototype.calculateBill = function () {
        return this.consumedEnergy * 0.53;
    };
    return ComercialClient;
}(Commerce_1.Commerce));
exports.ComercialClient = ComercialClient;
