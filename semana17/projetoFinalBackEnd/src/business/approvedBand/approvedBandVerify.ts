import { UserRole, User } from "../../model/User";

export const verifyRoleAsAdmin = (userRole: any) => {
  if (userRole !== UserRole.ADMIN) {
    throw new Error("You not permission");
  }
};

export const verifyAsBand = (bandData: User | undefined) => {
  if (!bandData?.getDescription()) {
    throw new Error("invalid input");
  }
};

export const verifyBandApproved = (bandData: User) => {
  if (bandData.getAproved() == 1) {
    throw new Error("band was approved");
  }
};
