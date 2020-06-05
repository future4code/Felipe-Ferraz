import { Request, Response } from "express";
import { TokenGenerator } from "../../services/tokenGenerator";
import { UserDatabase } from "../../data/UserDataBase";
import { HashGenerator } from "../../services/hashGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { GetAllBands } from "../../business/getAllBands/GetAllBandsBusiness";

export class UserControllerGetAllBands {
  private static UserBusiness = new GetAllBands(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async getAllBands(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    try {
      const result = await UserControllerGetAllBands.UserBusiness.GetAllBands(
        token
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
