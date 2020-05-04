import { Industry } from "../Industry/Industry";
import { Client } from "../../Interfaces/Client/Client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    private numberRegister: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }
  public getNumberRegister(): number {
    return this.numberRegister * 0.45 + 100 * this.machinesQuantity;
  }

  calculateBill(): number {
    return this.consumedEnergy;
  }
}
