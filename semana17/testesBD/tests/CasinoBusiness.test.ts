import { User, UserNacionality } from "../src/models/casino/User";
import { CasinoBusiness } from "../src/business/CasinoBusiness";
import { Casino, placeCasino } from "../src/models/casino/Casino";

test("testing user brazilian lower 18", () => {
  const casino = new Casino("Casino das flores", placeCasino.BRAZIL);
  let users: User[] = [];
  users.push(new User("Felipe", UserNacionality.BRAZILIAN, 21));
  users.push(new User("Maria", UserNacionality.BRAZILIAN, 25));
  users.push(new User("Enzo", UserNacionality.BRAZILIAN, 12));
  users.push(new User("Josephina", UserNacionality.BRAZILIAN, 15));

  const result = new CasinoBusiness().verifyAge(casino, users);

  expect(result).toEqual({ ...users });
});
