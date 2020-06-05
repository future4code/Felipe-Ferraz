import { LoginData } from "./typeLogin";
import { User } from "../../model/User";

export const verifyLoginData = (loginData: LoginData) => {
  if (!loginData.email && !loginData.nickname) {
    throw new Error("Missing input");
  }

  if (!loginData.password) {
    throw new Error("Missing input");
  }
};

export const verifyUser = (user: User | undefined) => {
  if (!user) {
    throw new Error("User not found");
  }
};

export const verifyPassword = (isPasswordCorrect: boolean) => {
  if (!isPasswordCorrect) {
    throw new Error("Invalid password");
  }
};

export const vefiryAproved = (isAproved: number) => {
  if (isAproved === 0) {
    throw new Error("User not aproved");
  }
};
