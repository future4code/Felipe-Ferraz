"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.introduceYourself = function () {
        return "Ol\u00E1, " + this.getName() + "  bom dia!";
    };
    return User;
}());
exports.User = User;
var felipe = new User("id", "felipe@gmail.com", "Felipe", "12345");
