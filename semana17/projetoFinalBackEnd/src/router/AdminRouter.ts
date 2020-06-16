import express from "express";
import { UserControllerApprovedBand } from "../controller/approvedBand/ApprovedBandController";
import { CreateGenderController } from "../controller/createGender/CreateGenderController";

export const admRouter = express.Router();

admRouter.post("/approved", new UserControllerApprovedBand().approvedBands);
admRouter.post("/creategender", new CreateGenderController().CreateNewGender);
