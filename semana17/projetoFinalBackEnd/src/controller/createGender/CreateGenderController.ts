import { Request, Response } from "express";
import { TokenGenerator } from "../../services/tokenGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { CreateGenderBusiness } from "../../business/createGender/CreateGenderBusiness";
import { GenreDataBase } from "../../data/GenreDataBase";

export class CreateGenderController {
  private static CreateGenderBusiness = new CreateGenderBusiness(
    new GenreDataBase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async CreateNewGender(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const name = req.body.name;
    try {
      const result = await CreateGenderController.CreateGenderBusiness.CreateNewGender(
        name,
        token
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
