import express from "express";
import { UserController } from "../controller/login/UserController";
import { UserControllerSingup } from "../controller/singup/UserControllerSingup";
import { UserControllerGetAllBands } from "../controller/getAllBands/UserControllerGetAllBandsGetAllBands";
import { UserControllerApprovedBand } from "../controller/approvedBand/ApprovedBandController";
//linha responsável por criar um módulo de rotas no express
export const userRouter = express.Router();

userRouter.post("/signup", new UserControllerSingup().signup);
userRouter.post("/signup/adm", new UserControllerSingup().signupAdm);
userRouter.post("/signup/band", new UserControllerSingup().signupBand);

userRouter.get("/login", new UserController().login);
userRouter.get("/allbands", new UserControllerGetAllBands().getAllBands);

userRouter.get("/approved", new UserControllerApprovedBand().approvedBands);

//userRouter.get("/profile/:id", new UserController().getUserById);
