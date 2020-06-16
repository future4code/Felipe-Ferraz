import express from "express";
import { CreateAlbumController } from "../controller/createAlbum/createAlbumController";

export const bandRouter = express.Router();

bandRouter.post("/create", new CreateAlbumController().CreateNewAlbum);
