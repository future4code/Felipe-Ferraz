import { Commerce } from "../Commerce/Commerce";
import { Client } from "../../Interfaces/Client/Client";

export class ComercialClient extends Commerce implements Client {
  constructor(
    private cnpj: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }
  getCnpj(): number {
    return this.cnpj;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
