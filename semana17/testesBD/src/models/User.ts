export class User {
  constructor(private name: string, private balance: number) {}

  getName() {
    return this.name;
  }

  getBalance() {
    return this.balance;
  }

  setBalance(value: Number) {
    return (this.balance -= Number(value));
  }
}
