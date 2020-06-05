import { UserDatabase } from "../../data/UserDataBase";
import { IdGenerator } from "../../services/idGenerator";
import { HashGenerator } from "../../services/hashGenerator";
import { TokenGenerator } from "../../services/tokenGenerator";
import { User } from "../../model/User";
import {
  verifyRoleAsAdmin,
  verifyAsBand,
  verifyBandApproved,
} from "./approvedBandVerify";

export class AprovedBandsBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async ApprovedBand(token: string, idBand: string) {
    const tokenData = this.tokenGenerator.verify(token);

    verifyRoleAsAdmin(tokenData);

    const bandData = await this.userDatabase.getUserById(idBand);

    verifyAsBand(bandData);

    verifyBandApproved(bandData as User);

    await this.userDatabase.approved(idBand);

    return "approved band";
  }
}
