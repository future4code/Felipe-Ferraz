export class Album {
  constructor(
    private name: string,
    private id: string,
    private idBand: string
  ) {}
  public getName() {
    return this.name;
  }
  public getId() {
    return this.id;
  }
  public getIdBand() {
    return this.idBand;
  }
}
