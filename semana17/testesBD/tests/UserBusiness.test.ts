import { User } from "../src/models/User";
import { UserBusiness } from "../src/business/UserBusiness";

test("testing balance greater than value", () => {
  const user = new User("Felipe", 100);
  const result = new UserBusiness().performPurchase(user, 10);

  expect(result).toEqual({ ...user, balance: 90 });
});

test("testing balance to equal value", () => {
  const user = new User("Felipe", 100);
  const result = new UserBusiness().performPurchase(user, 100);
  expect(result).toEqual({ ...user, balance: 0 });
});

test("testing balance to lower value", () => {
  const user = new User("Felipe", 100);
  const result = new UserBusiness().performPurchase(user, 140);
  expect(result).toEqual(undefined);
});
