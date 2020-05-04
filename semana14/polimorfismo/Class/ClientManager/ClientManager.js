"use strict";
exports.__esModule = true;
var ResidentialClient_1 = require("../ResidentialClient/ResidentialClient");
var CommercialClient_1 = require("../CommercialClient/CommercialClient");
var IndustrialClient_1 = require("../IndustrialClient/IndustrialClient");
var ClientManager = /** @class */ (function () {
    function ClientManager() {
        this.clients = [];
    }
    ClientManager.prototype.getClients = function () {
        return this.clients.length;
    };
    ClientManager.prototype.registerClient = function (client) {
        this.clients.push(client);
    };
    ClientManager.prototype.calculateBillOfClient = function (registrationNumber) {
        var foundClient = this.clients.find(function (client) {
            return client.registrationNumber === registrationNumber;
        });
        if (foundClient) {
            return foundClient.calculateBill();
        }
        return 0;
    };
    ClientManager.prototype.calculateTotalIncome = function () {
        var total = 0;
        this.clients.forEach(function (client) {
            return (total += client.calculateBill());
        });
        return total;
    };
    ClientManager.prototype.deleteUser = function (registrationNumber) {
        var indexDel = this.clients.findIndex(function (client) {
            return client.registrationNumber === registrationNumber;
        });
        this.clients.splice(indexDel, 1);
    };
    return ClientManager;
}());
exports.ClientManager = ClientManager;
var residentialClient = new ResidentialClient_1.ResidentialClient(452547812, "48715494", 3, "Felipe", 12, 7);
var comercialClient = new CommercialClient_1.ComercialClient(4861618, "Jose livros", 111, 20, 4, "111222333");
var industrialClient = new IndustrialClient_1.IndustrialClient(458, "Aços top", 777, 90, 10, "1578962");
var clientManager = new ClientManager();
clientManager.registerClient(residentialClient);
clientManager.registerClient(comercialClient);
clientManager.registerClient(industrialClient);
console.log(clientManager.getClients());
