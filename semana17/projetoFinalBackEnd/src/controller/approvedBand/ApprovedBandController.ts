import { Request, Response } from "express";
import { TokenGenerator } from "../../services/tokenGenerator";
import { UserDatabase } from "../../data/UserDataBase";
import { HashGenerator } from "../../services/hashGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { AprovedBandsBusiness } from "../../business/approvedBand/ApprovedBandBusiness";

export class UserControllerApprovedBand {
  private static UserBusiness = new AprovedBandsBusiness(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async approvedBands(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const id = req.body.id;
    try {
      const result = await UserControllerApprovedBand.UserBusiness.ApprovedBand(
        token,
        id
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
