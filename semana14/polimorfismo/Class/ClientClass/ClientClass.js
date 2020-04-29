"use strict";
exports.__esModule = true;
var ClientClass = /** @class */ (function () {
    function ClientClass(name, registrationNumber, consumedEnergy) {
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
    ClientClass.prototype.calculateBill = function () {
        return 2;
    };
    return ClientClass;
}());
var test = new ClientClass("Felipe", 123, 56);
console.log(test.calculateBill());
