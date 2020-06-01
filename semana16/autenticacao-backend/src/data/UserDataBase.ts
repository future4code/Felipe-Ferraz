import knex from "knex";

export default class UserDataBase {
  private connection() {
    return knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
      },
    });
  }

  private static TABLE_NAME = "User";

  public async createNewUser(
    id: string,
    password: string,
    email: string
  ): Promise<void> {
    await this.connection()
      .insert({ id, password, email })
      .into(UserDataBase.TABLE_NAME);
    console.log("usuario criado com suceso");
  }
  public async login(email: string, password: string): Promise<any> {
    const response = await this.connection()
      .select("*")
      .from(UserDataBase.TABLE_NAME)
      .where({ email, password });
    return response[0];
  }

  public async getUserByID(id: string): Promise<any> {
    const response = await this.connection()
      .select("*")
      .from(UserDataBase.TABLE_NAME)
      .where({ id });
    return response[0];
  }
}
