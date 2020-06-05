import { AdminUser, NormalUser, BandUser } from "./typeSingUp";
import { TokenGenerator } from "../../services/tokenGenerator";
import { UserRole } from "../../model/User";

export const verifyDataAdmin = (adminUser: AdminUser): void => {
  if (new TokenGenerator().verify(adminUser.token).role !== UserRole.ADMIN) {
    throw new Error("you not permisssion");
  }

  if (
    !adminUser.name ||
    !adminUser.email ||
    !adminUser.password ||
    adminUser.role !== UserRole.ADMIN ||
    !adminUser.nickname
  ) {
    throw new Error("Missing input");
  }

  if (adminUser.email.indexOf("@") === -1) {
    throw new Error("Invalid email");
  }

  if (adminUser.password.length < 10) {
    throw new Error("Invalid password");
  }
};

export const verifyDataNormalUser = (normalUser: NormalUser): void => {
  if (
    !normalUser.name ||
    !normalUser.email ||
    !normalUser.password ||
    !normalUser.role
  ) {
    throw new Error("Missing input");
  }

  if (normalUser.email.indexOf("@") === -1) {
    throw new Error("Invalid email");
  }

  if (normalUser.password.length < 6) {
    throw new Error("Invalid password");
  }
};

export const verifyDataBandUser = (bandUser: BandUser): void => {
  if (
    !bandUser.name ||
    !bandUser.email ||
    !bandUser.password ||
    !bandUser.role ||
    !bandUser.description
  ) {
    throw new Error("Missing input");
  }

  if (bandUser.email.indexOf("@") === -1) {
    throw new Error("Invalid email");
  }

  if (bandUser.password.length < 6) {
    throw new Error("Invalid password");
  }
};
