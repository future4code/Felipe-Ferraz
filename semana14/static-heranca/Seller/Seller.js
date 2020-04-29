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
var Employee_1 = require("../Employee/Employee");
var Seller = /** @class */ (function (_super) {
    __extends(Seller, _super);
    function Seller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.salesQuantity = 0;
        return _this;
    }
    Seller.prototype.setSalesQuantity = function () {
        this.salesQuantity += 5;
    };
    Seller.prototype.getSalesQuantity = function () {
        return this.salesQuantity;
    };
    Seller.prototype.calculateTotalSalary = function () {
        var salary = this.getBaseSaraly();
        var commission = this.getSalesQuantity();
        return salary + Seller.BENEFITS_VALUE + commission * 5;
    };
    return Seller;
}(Employee_1.Employee));
var maria = new Seller("20/05/2008", 1200, "789", "maria@gmail.com", "Maria", "111");
var mario = new Seller("20/05/2002", 1200, "7778", "mario@gmail.com", "Mario", "222");
console.log("\nID : " + maria.getId() + "\nNome: " + maria.getName() + "\nEmail: " + maria.getEmail() + "\nData de Admiss\u00E3o : " + maria.getAdmissionDate() + "\nSal\u00E1rio base: " + maria.getBaseSaraly() + "\nSal\u00E1rio total : " + maria.calculateTotalSalary() + "\nM\u00E9todo Ol\u00E1 : " + maria.introduceYourself() + "\nAumentando a venda: " + maria.setSalesQuantity() + "\n");
mario.setSalesQuantity();
console.log("Sal\u00E1rio : " + mario.calculateTotalSalary());
