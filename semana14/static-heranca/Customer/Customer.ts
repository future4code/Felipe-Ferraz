import { User } from "../User/User";

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const felipeCustomer = new Customer(
  "123",
  "felipe2@gmail.com",
  "felipe",
  "123",
  "4321234324-54"
);

console.log(
  `ID: ${felipeCustomer.getId()},
   Name: ${felipeCustomer.getName()} ,
   Email: ${felipeCustomer.getEmail()},
   Valor Total da compra : ${felipeCustomer.purchaseTotal},
   Cartão de cŕedito : ${felipeCustomer.getCreditCard()}
   `
);

console.log(felipeCustomer);
