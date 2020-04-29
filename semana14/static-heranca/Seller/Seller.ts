import { Employee } from "../Employee/Employee";

class Seller extends Employee {
  private salesQuantity: number = 0;
  static SELLING_COMMISION: number = 5;

  public setSalesQuantity(): void {
    this.salesQuantity += 5;
  }

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  public calculateTotalSalary(): number {
    const salary = this.getBaseSaraly();
    const salesCommission = this.getSalesQuantity();
    return (
      salary +
      Seller.BENEFITS_VALUE +
      salesCommission * Seller.SELLING_COMMISION
    );
  }
}

const maria = new Seller(
  "20/05/2008",
  1200,
  "789",
  "maria@gmail.com",
  "Maria",
  "111"
);

const mario = new Seller(
  "20/05/2002",
  1200,
  "7778",
  "mario@gmail.com",
  "Mario",
  "222"
);

console.log(`
ID : ${maria.getId()}
Nome: ${maria.getName()}
Email: ${maria.getEmail()}
Data de Admissão : ${maria.getAdmissionDate()}
Salário base: ${maria.getBaseSaraly()}
Salário total : ${maria.calculateTotalSalary()}
Método Olá : ${maria.introduceYourself()}
Aumentando a venda: ${maria.setSalesQuantity()}
`);

mario.setSalesQuantity();
console.log(`Salário : ${mario.calculateTotalSalary()}`);
