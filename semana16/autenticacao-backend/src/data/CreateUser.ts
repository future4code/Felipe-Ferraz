import knex from "knex";

export default class CreateUser {
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
    try {
      await this.connection()
        .insert({ id, password, email })
        .into(`${CreateUser.TABLE_NAME}`);
      console.log("usuario criado com suceso");
    } catch (error) {
      error.message;
    }
  }
}
