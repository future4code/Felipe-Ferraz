import { UserDatabase } from "../../data/UserDataBase";
import { IdGenerator } from "../../services/idGenerator";
import { HashGenerator } from "../../services/hashGenerator";
import { TokenGenerator } from "../../services/tokenGenerator";
import { LoginData } from "./typeLogin";
import {
  verifyLoginData,
  verifyUser,
  verifyPassword,
  vefiryAproved,
} from "./verifyLogin";

export class UserBusinessLogin {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async login(loginData: LoginData) {
    verifyLoginData(loginData);
    let user;
    if (loginData.email) {
      user = await this.userDatabase.getUserByEmail(loginData.email);
    } else if (loginData.nickname) {
      user = await this.userDatabase.getUserByNickName(loginData.nickname);
    }

    verifyUser(user);

    const isPasswordCorrect = await this.hashGenerator.compareHash(
      loginData.password,
      user.getPassword()
    );

    verifyPassword(isPasswordCorrect);

    vefiryAproved(user.getAproved());

    const accessToken = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });

    return { accessToken };
  }
}
