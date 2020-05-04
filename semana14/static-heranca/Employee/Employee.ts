import { User } from "../User/User";

export class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;

  static BENEFITS_VALUE: number = 400;

  constructor(
    admissionDate: string,
    baseSalary: number,
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSaraly(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + Employee.BENEFITS_VALUE;
  }
}

const joao = new Employee(
  "12/05/2010",
  1500,
  "123",
  "joao@gmail.com",
  "Joao",
  "432"
);
console.log(`
ID: ${joao.getId()},
Email: ${joao.getEmail()},
Nome: ${joao.getName()},
Data de admissão: ${joao.getAdmissionDate()}
Salário base: ${joao.getBaseSaraly()}
Salário total: ${joao.calculateTotalSalary()}
`);

console.log(joao); // Porque a senha tá visível aqui?
