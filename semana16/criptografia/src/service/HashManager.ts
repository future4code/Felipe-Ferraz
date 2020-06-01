import * as bcrypt from "bcryptjs";

export default class HashManager {
  public async setHas(s: string): Promise<void> {
    const rounds = Number(process.env.BCRYPT_ROUNDS);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    console.log("O resutlado é " + result);
  }

  public async compareHas(s: string, hash: string): Promise<void> {
    console.log(bcrypt.compare(s, hash));
  }
}
