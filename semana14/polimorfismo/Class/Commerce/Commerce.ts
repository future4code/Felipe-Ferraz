import { Place } from "../Place/Place";

export class Commerce extends Place {
  constructor(protected floorsQuantity: number, cep: string) {
    super(cep);
  }

  private getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}
