export class User {
  constructor(
    private name: string,
    private nacionality: UserNacionality,
    private age: number
  ) {}

  getName() {
    return this.name;
  }
  getNacionality() {
    return this.nacionality;
  }

  getAge() {
    return this.age;
  }
}

export enum UserNacionality {
  AMERICAN = "AMERICAN",
  BRAZILIAN = "BRAZILIAN",
}
