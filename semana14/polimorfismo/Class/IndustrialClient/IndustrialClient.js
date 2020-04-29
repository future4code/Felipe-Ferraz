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
var Industry_1 = require("../Industry/Industry");
var IndustrialClient = /** @class */ (function (_super) {
    __extends(IndustrialClient, _super);
    function IndustrialClient(numberRegister, name, registrationNumber, consumedEnergy, machinesQuantity, cep) {
        var _this = _super.call(this, machinesQuantity, cep) || this;
        _this.numberRegister = numberRegister;
        _this.name = name;
        _this.registrationNumber = registrationNumber;
        _this.consumedEnergy = consumedEnergy;
        return _this;
    }
    IndustrialClient.prototype.getNumberRegister = function () {
        return this.numberRegister * 0.45 + 100 * this.machinesQuantity;
    };
    IndustrialClient.prototype.calculateBill = function () {
        return this.consumedEnergy;
    };
    return IndustrialClient;
}(Industry_1.Industry));
exports.IndustrialClient = IndustrialClient;
