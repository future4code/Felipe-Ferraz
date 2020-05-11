import * as jwt from "jsonwebtoken";

export default class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken = (id: AuthentionData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: Authenticator.EXPIRES_IN,
    });

    return token;
  };

  public verify = (token: string): AuthentionData => {
    const data = jwt.verify(token, process.env.JWT_KEY as string) as any;

    return { id: data.id };
  };
}

export interface AuthentionData {
  id: string;
}
