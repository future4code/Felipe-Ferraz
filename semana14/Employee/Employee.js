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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(admissionDate, baseSalary, id, email, name, password) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.admissionDate = admissionDate;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Employee.prototype.getAdmissionDate = function () {
        return this.admissionDate;
    };
    Employee.prototype.getBaseSaraly = function () {
        return this.baseSalary;
    };
    Employee.prototype.calculateTotalSalary = function () {
        return this.baseSalary + Employee.BENEFITS_VALUE;
    };
    Employee.BENEFITS_VALUE = 400;
    return Employee;
}(User_1.User));
exports.Employee = Employee;
var joao = new Employee("12/05/2010", 1500, "123", "joao@gmail.com", "Joao", "432");
console.log("\nID: " + joao.getId() + ",\nEmail: " + joao.getEmail() + ",\nNome: " + joao.getName() + ",\nData de admiss\u00E3o: " + joao.getAdmissionDate() + "\nSal\u00E1rio base: " + joao.getBaseSaraly() + "\nSal\u00E1rio total: " + joao.calculateTotalSalary() + "\n");
console.log(joao); // Porque a senha tá visível aqui?
