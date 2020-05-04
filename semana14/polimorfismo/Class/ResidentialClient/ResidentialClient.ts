import { Residence } from "../Residence/Residence";
import { Client } from "../../Interfaces/Client/Client";

export class ResidentialClient extends Residence implements Client {
  constructor(
    private cpf: number,
    cep: string,
    residentsQuantity: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ) {
    super(residentsQuantity, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
  private getCpf(): number {
    return this.cpf;
  }
}
