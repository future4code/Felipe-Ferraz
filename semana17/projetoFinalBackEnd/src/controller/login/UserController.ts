import { Request, Response } from "express";
import { TokenGenerator } from "../../services/tokenGenerator";
import { UserDatabase } from "../../data/UserDataBase";
import { HashGenerator } from "../../services/hashGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { UserBusinessLogin } from "../../business/login/UserBusinessLogin";

export class UserController {
  private static UserBusiness = new UserBusinessLogin(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    const nickname = req.body.nickname;
    try {
      const result = await UserController.UserBusiness.login({
        email,
        password,
        nickname,
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
