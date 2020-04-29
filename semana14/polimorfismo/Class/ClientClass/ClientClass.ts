import { Client } from "../../Interfaces/Client/Client";

class ClientClass implements Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;

  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number
  ) {
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
  }
  calculateBill(): number {
    return 2;
  }
}

const test = new ClientClass("Felipe", 123, 56);

console.log(test.calculateBill());
