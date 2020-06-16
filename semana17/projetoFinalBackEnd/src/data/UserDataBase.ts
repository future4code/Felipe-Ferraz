import { BaseDataBase } from "./BaseDataBase";
import { User } from "../model/User";

export class UserDatabase extends BaseDataBase {
  protected tableName: string = "UserSpotenu";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.password,
        dbModel.aproved,
        dbModel.role,
        dbModel.nickname,
        dbModel.email,
        dbModel.description
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${
          this.tableName
        } (id, name, nickname, email, password, role, aproved, description)
        VALUES (
          '${user.getId()}', 
          '${user.getName()}', 
          '${user.getNickname()}',
          '${user.getEmail()}',
          '${user.getPassword()}', 
          '${user.getRole()}',
          ${user.getAproved()},
          ${user.getDescription()}
          )`);
  }

  public async createBand(user: User): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${
          this.tableName
        } (id, name, nickname, email, password, role, aproved, description)
        VALUES (
          '${user.getId()}', 
          '${user.getName()}', 
          '${user.getNickname()}',
          '${user.getEmail()}',
          '${user.getPassword()}', 
          '${user.getRole()}',
           ${user.getAproved()},
          '${user.getDescription()}'
          )`);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE email = '${email}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getUserByNickName(nickname: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE nickname = '${nickname}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE id = '${id}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getAllBands(): Promise<User[]> {
    const result = await super.getConnection()
      .raw(`SELECT * FROM ${this.tableName}
    WHERE description is not null`);
    return result[0].map((res: any) => {
      return this.toModel(res);
    });
  }
  public async approved(id: string): Promise<void> {
    return await super.getConnection().raw(`
    UPDATE UserSpotenu
    SET aproved = 1
    WHERE id = "${id}";
`);
  }
  // public async getAllUsers(): Promise<User[]> {
  //   const result = await super.getConnection().raw(`
  //     SELECT * from ${this.tableName}
  //   `);
  //   return result[0].map((res: any) => {
  //     return this.toModel(res);
  //   });
  // }
}
