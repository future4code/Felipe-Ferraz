import { TokenGenerator } from "../../services/tokenGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { GenreDataBase } from "../../data/GenreDataBase";
import { Genre } from "../../model/Genre";
import { UserRole } from "../../model/User";

export class CreateGenderBusiness {
  constructor(
    private genreDataBase: GenreDataBase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async CreateNewGender(name: string, token: string) {
    if (!name) {
      throw new Error("Invalid input");
    }

    const tokenData = this.tokenGenerator.verify(token);

    if (tokenData.role !== UserRole.ADMIN) {
      throw new Error("You do not have permission");
    }

    const id = this.idGenerator.generate();

    const verify = await this.genreDataBase.getGenderByName(name);
    console.log("verify", verify);

    if (verify) {
      throw new Error("Gender existing");
    }
    const test = new Genre(name, id);

    console.log(test, "new Gender");
    await this.genreDataBase.createNewGender(new Genre(name, id));

    return "Genre created successfully";
  }
}
