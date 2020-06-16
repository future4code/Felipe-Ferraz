import { UserDatabase } from "../../data/UserDataBase";
import {
  User,
  stringToUserRole,
  UserRole,
  UserAproved,
} from "../../model/User";
import { IdGenerator } from "../../services/idGenerator";
import { HashGenerator } from "../../services/hashGenerator";
import { TokenGenerator } from "../../services/tokenGenerator";
import { AdminUser, NormalUser, BandUser } from "./typeSingUp";

export class UserBusinessSingup {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    user: NormalUser,
    verifydataNormal: (user: NormalUser) => void
  ) {
    verifydataNormal(user);

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(user.password);

    await this.userDatabase.createUser(
      new User(
        id,
        user.name,
        cryptedPassword,
        UserAproved.APROVADA,
        stringToUserRole(user.role),
        user.nickname,
        user.email,
        null
      )
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role: user.role,
    });
    return { accessToken };
  }

  public async signupAdm(
    userAdmin: AdminUser,
    verifyDataAdmin: (user: AdminUser) => void
  ) {
    verifyDataAdmin(userAdmin);

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(userAdmin.password);

    await this.userDatabase.createUser(
      new User(
        id,
        userAdmin.name,
        cryptedPassword,
        UserAproved.NAO_APROVADA,
        stringToUserRole(userAdmin.role),
        userAdmin.nickname,
        userAdmin.email,
        null
      )
    );

    return " user created successfully, wait for adm approval";
  }
  public async signupBand(
    user: BandUser,
    verifyDataBandUser: (user: BandUser) => void
  ) {
    verifyDataBandUser(user);

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(user.password);

    await this.userDatabase.createBand(
      new User(
        id,
        user.name,
        cryptedPassword,
        UserAproved.NAO_APROVADA,
        stringToUserRole(user.role),
        user.nickname,
        user.email,
        user.description as string
      )
    );

    return "band created successfully, wait for adm approval";
  }
}
