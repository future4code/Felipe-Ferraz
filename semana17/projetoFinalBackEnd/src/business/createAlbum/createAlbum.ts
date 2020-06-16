import { TokenGenerator } from "../../services/tokenGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { GenreDataBase } from "../../data/GenreDataBase";
import { Genre } from "../../model/Genre";
import { UserRole } from "../../model/User";
import { AlbumDataBase } from "../../data/AlbumDataBase";
import { Album } from "../../model/Album";
import { UserDatabase } from "../../data/UserDataBase";

export class CreateAlbumBusiness {
  constructor(
    private albumDataBase: AlbumDataBase,
    private userDatabase: UserDatabase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async CreateNewAlbum(name: string, token: string, idBand: string) {
    if (!name || !idBand) {
      throw new Error("Invalid input");
    }

    const tokenData = this.tokenGenerator.verify(token);

    if (tokenData.role !== UserRole.BANDA) {
      throw new Error("You do not have permission");
    }

    const verifyBand = await this.userDatabase.getUserById(idBand);

    if (!verifyBand || verifyBand.getRole() !== UserRole.BANDA) {
      throw new Error("Invalid id band");
    }
    const id = this.idGenerator.generate();

    const verify = await this.albumDataBase.getAlbumByName(name);

    if (verify) {
      throw new Error("Album existing");
    }

    await this.albumDataBase.createNewAlbum(new Album(name, id, idBand));

    return "Album created successfully";
  }
}
