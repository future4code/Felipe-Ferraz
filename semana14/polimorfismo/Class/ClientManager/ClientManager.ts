import { Client } from "../../Interfaces/Client/Client";
import { ResidentialClient } from "../ResidentialClient/ResidentialClient";
import { ComercialClient } from "../CommercialClient/CommercialClient";
import { IndustrialClient } from "../IndustrialClient/IndustrialClient";

export class ClientManager {
  private clients: Client[] = [];

  getClients(): number {
    return this.clients.length;
  }

  public registerClient(client: Client): void {
    this.clients.push(client);
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });

    if (foundClient) {
      return foundClient.calculateBill();
    }
    return 0;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      return (total += client.calculateBill());
    });
    return total;
  }

  public deleteUser(registrationNumber: number): void {
    const indexDel = this.clients.findIndex((client) => {
      return client.registrationNumber === registrationNumber;
    });
    this.clients.splice(indexDel, 1);
  }
}
const residentialClient = new ResidentialClient(
  452547812,
  "48715494",
  3,
  "Felipe",
  12,
  7
);

const comercialClient = new ComercialClient(
  4861618,
  "Jose livros",
  111,
  20,
  4,
  "111222333"
);
const industrialClient = new IndustrialClient(
  458,
  "Aços top",
  777,
  90,
  10,
  "1578962"
);

const clientManager = new ClientManager();

clientManager.registerClient(residentialClient);
clientManager.registerClient(comercialClient);
clientManager.registerClient(industrialClient);

console.log(clientManager.getClients());
