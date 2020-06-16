import { BaseDataBase } from "./BaseDataBase";
import { Album } from "../model/Album";

export class AlbumDataBase extends BaseDataBase {
  protected tableName: string = "AlbumSpotenu";

  private toModel(dbModel?: any): Album | undefined {
    return dbModel && new Album(dbModel.name, dbModel.id, dbModel.id_band);
  }

  public async createNewAlbum(album: Album): Promise<void> {
    await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id, name, id_band)
            VALUES (
              '${album.getId()}', 
              '${album.getName()}',
              '${album.getIdBand()}'
              )`);
  }
  public async getAlbumByName(name: string): Promise<Album | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE name = '${name}'
      `);
    return this.toModel(result[0][0]);
  }

  //   public async addGenreAtAlbum(album: Album, genres: []): Promise<void> {
  //     for (let i = 0; i < genres.length; i++) {
  //       await super.getConnection().raw(`
  //         INSERT INTO ${this.tableName} (id_genre ,id_band)
  //         VALUES (
  //           '${album.getId()}',
  //           '${album.getName()}',
  //           '${album.getIdBand()}'
  //           )`);
  //     }
  //   }

  //   public async getAllGenres(): Promise<Album[]> {
  //     const result = await super
  //       .getConnection()
  //       .raw(`SELECT * FROM ${this.tableName}`);
  //     return result[0].map((res: any) => {
  //       return this.toModel(res);
  //     });
  //   }
}
