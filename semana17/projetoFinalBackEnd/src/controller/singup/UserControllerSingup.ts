import { Request, Response } from "express";
import { UserBusinessSingup } from "../../business/singup/UserBusinessSingup";
import { TokenGenerator } from "../../services/tokenGenerator";
import { UserDatabase } from "../../data/UserDataBase";
import { HashGenerator } from "../../services/hashGenerator";
import { IdGenerator } from "../../services/idGenerator";
import {
  verifyDataAdmin,
  verifyDataNormalUser,
} from "../../business/singup/verifyData";

export class UserControllerSingup {
  private static UserBusiness = new UserBusinessSingup(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  async signup(req: Request, res: Response) {
    try {
      const result = await UserControllerSingup.UserBusiness.signup(
        {
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        },
        verifyDataNormalUser
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async signupAdm(req: Request, res: Response) {
    try {
      const result = await UserControllerSingup.UserBusiness.signupAdm(
        {
          token: req.headers.authorization as string,
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        },
        verifyDataAdmin
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
  async signupBand(req: Request, res: Response) {
    try {
      const result = await UserControllerSingup.UserBusiness.signupBand(
        {
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
          description: req.body.description,
        },
        verifyDataNormalUser
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
