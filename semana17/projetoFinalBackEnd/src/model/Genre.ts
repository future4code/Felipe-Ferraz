export class Genre {
  constructor(private name: string, private id: string) {}
  public getName() {
    return this.name;
  }
  public getId() {
    return this.id;
  }
}
