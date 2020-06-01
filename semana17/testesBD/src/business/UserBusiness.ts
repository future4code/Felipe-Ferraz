import { User } from "../models/User";

export class UserBusiness {
  public performPurchase(user: User, value: Number): User | undefined {
    if (user.getBalance() >= value) {
      user.setBalance(value);
      return new User(user.getName(), user.getBalance());
    }
    return undefined;
  }
}
