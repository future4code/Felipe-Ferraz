import { Place } from "../Place/Place";

export class Industry extends Place {
  constructor(protected machinesQuantity: number, cep: string) {
    super(cep);
  }

  private getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}
