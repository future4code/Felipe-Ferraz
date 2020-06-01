export class Casino {
  constructor(private name: string, private place: placeCasino) {}

  getName() {
    return this.name;
  }

  getPlace() {
    return this.place;
  }
}

export enum placeCasino {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}
