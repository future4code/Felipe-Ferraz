import BaseDataBase from "../baseDataBase/BaseDataBase";

export default class UserDataBase extends BaseDataBase {
  private static TABLE_NAME = "User";

  public async createNewUser(
    id: string,
    password: string,
    email: string
  ): Promise<void> {
    await this.getConnection()
      .insert({ id, password, email })
      .into(UserDataBase.TABLE_NAME);
    console.log("usuario criado com suceso");
  }
  public async login(email: string, password: string): Promise<any> {
    const response = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_NAME)
      .where({ email, password });
    return response[0];
  }

  public async getUserByID(id: string): Promise<any> {
    const response = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_NAME)
      .where({ id });
    return response[0];
  }
}
