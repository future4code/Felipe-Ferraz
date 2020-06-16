import { UserDatabase } from "../data/UserDataBase";
import { UserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}
  public async getUserById(id: string): Promise<any> {
    if (!id) {
      throw new Error("Missing input");
    }

    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole(),
      email: user.getEmail(),
    };
  }

  async getAllUser(token: string) {
    if (!token) {
      throw new Error("Missing input");
    }

    const userToken = this.tokenGenerator.verify(token);

    const userData = await this.userDatabase.getUserById(userToken.id);

    if (userData?.getRole() !== UserRole.ADMIN) {
      throw new Error("Unauthorized user");
    }

    const users = await this.userDatabase.getAllUsers();

    return users.map((data) => ({
      id: data.getId(),
      name: data.getName(),
      role: data.getRole(),
      email: data.getEmail(),
    }));
  }
}
