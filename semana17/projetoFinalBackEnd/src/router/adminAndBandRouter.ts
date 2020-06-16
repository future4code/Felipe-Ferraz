import express from "express";
import { UserControllerGetAllGenders } from "../controller/getAllGenders.ts/GetAllGernders";

export const admAndBandRouter = express.Router();

admAndBandRouter.get("/all", new UserControllerGetAllGenders().getAllGenders);
