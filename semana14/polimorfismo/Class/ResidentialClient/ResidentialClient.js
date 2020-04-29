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
var Residence_1 = require("../Residence/Residence");
var ResidentialClient = /** @class */ (function (_super) {
    __extends(ResidentialClient, _super);
    function ResidentialClient(cpf, cep, residentsQuantity, name, registrationNumber, consumedEnergy) {
        var _this = _super.call(this, residentsQuantity, cep) || this;
        _this.cpf = cpf;
        _this.name = name;
        _this.registrationNumber = registrationNumber;
        _this.consumedEnergy = consumedEnergy;
        return _this;
    }
    ResidentialClient.prototype.calculateBill = function () {
        return this.consumedEnergy * 0.75;
    };
    ResidentialClient.prototype.getCpf = function () {
        return this.cpf;
    };
    return ResidentialClient;
}(Residence_1.Residence));
exports.ResidentialClient = ResidentialClient;
