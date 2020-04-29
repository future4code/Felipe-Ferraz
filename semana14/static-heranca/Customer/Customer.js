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
var User_1 = require("../User/User");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, email, name, password, creditCard) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        _this.creditCard = creditCard;
        return _this;
    }
    Customer.prototype.getCreditCard = function () {
        return this.creditCard;
    };
    return Customer;
}(User_1.User));
var felipeCustomer = new Customer("123", "felipe2@gmail.com", "felipe", "123", "4321234324-54");
console.log("ID: " + felipeCustomer.getId() + ",\n   Name: " + felipeCustomer.getName() + " ,\n   Email: " + felipeCustomer.getEmail() + ",\n   Valor Total da compra : " + felipeCustomer.purchaseTotal + ",\n   Cart\u00E3o de c\u0155edito : " + felipeCustomer.getCreditCard() + "\n   ");
console.log(felipeCustomer);
