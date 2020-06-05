import { Request, Response } from "express";
import { TokenGenerator } from "../../services/tokenGenerator";
import { IdGenerator } from "../../services/idGenerator";
import { CreateAlbumBusiness } from "../../business/createAlbum/createAlbum";
import { AlbumDataBase } from "../../data/AlbumDataBase";
import { UserDatabase } from "../../data/UserDataBase";

export class CreateAlbumController {
  private static CreateAlbumBusiness = new CreateAlbumBusiness(
    new AlbumDataBase(),
    new UserDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async CreateNewAlbum(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const name = req.body.name;
    const idBand = req.body.idBand;
    try {
      const result = await CreateAlbumController.CreateAlbumBusiness.CreateNewAlbum(
        name,
        token,
        idBand
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
