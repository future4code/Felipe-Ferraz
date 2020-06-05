import { UserDatabase } from "../../data/UserDataBase";
import { IdGenerator } from "../../services/idGenerator";
import { HashGenerator } from "../../services/hashGenerator";
import { TokenGenerator } from "../../services/tokenGenerator";

export class GetAllBands {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async GetAllBands(token: string) {
    this.tokenGenerator.verify(token);

    const result = await this.userDatabase.getAllBands();

    return { result };
  }
}
