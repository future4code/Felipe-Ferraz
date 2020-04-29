import { Place } from "../Place/Place";

export class Residence extends Place {
  constructor(protected residentsQuantity: number, cep: string) {
    super(cep);
  }

  private getResidentsQuantity(): number {
    return this.residentsQuantity;
  }
}
