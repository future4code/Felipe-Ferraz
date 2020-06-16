import { Genre } from "../model/Genre";
import { BaseDataBase } from "./BaseDataBase";

export class GenreDataBase extends BaseDataBase {
  protected tableName: string = "GenreSpotenu";

  private toModel(dbModel?: any): Genre | undefined {
    return dbModel && new Genre(dbModel.name, dbModel.id);
  }

  public async createNewGender(genre: Genre): Promise<void> {
    console.log(genre.getName());
    await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id, name)
            VALUES (
              '${genre.getId()}', 
              '${genre.getName()}'
              )`);
  }
  public async getGenderByName(name: string): Promise<Genre | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE name = '${name}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getAllGenres(): Promise<Genre[]> {
    const result = await super
      .getConnection()
      .raw(`SELECT * FROM ${this.tableName}`);
    return result[0].map((res: any) => {
      return this.toModel(res);
    });
  }
}
