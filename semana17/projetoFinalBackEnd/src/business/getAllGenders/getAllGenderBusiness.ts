import { TokenGenerator } from "../../services/tokenGenerator";
import { GenreDataBase } from "../../data/GenreDataBase";
import { UserRole } from "../../model/User";

export class GetAllGenresBusiness {
  constructor(
    private genreDataBase: GenreDataBase,
    private tokenGenerator: TokenGenerator
  ) {}

  public async GetAllGenres(token: string) {
    const tokenData = this.tokenGenerator.verify(token);

    console.log(tokenData.role);

    if (
      tokenData.role !== UserRole.ADMIN &&
      tokenData.role !== UserRole.BANDA
    ) {
      throw new Error("You do not have permission");
    }

    const result = await this.genreDataBase.getAllGenres();

    return { result };
  }
}
