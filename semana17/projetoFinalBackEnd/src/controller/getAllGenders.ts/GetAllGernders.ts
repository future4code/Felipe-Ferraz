import { Request, Response } from "express";
import { TokenGenerator } from "../../services/tokenGenerator";
import { UserDatabase } from "../../data/UserDataBase";
import { HashGenerator } from "../../services/hashGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { GetAllBands } from "../../business/getAllBands/GetAllBandsBusiness";
import { GetAllGenresBusiness } from "../../business/getAllGenders/getAllGenderBusiness";
import { GenreDataBase } from "../../data/GenreDataBase";

export class UserControllerGetAllGenders {
  private static GetAllGenresBusiness = new GetAllGenresBusiness(
    new GenreDataBase(),
    new TokenGenerator()
  );

  public async getAllGenders(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    try {
      const result = await UserControllerGetAllGenders.GetAllGenresBusiness.GetAllGenres(
        token
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
