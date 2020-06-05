import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole } from "../../src/model/User";

let userDatabase = {};
let hashGenerator = {};
let tokenGenerator = {};
let idGenerator = {};

describe("testing UserBusiness.getUserById", () => {
  test("Should return 'User not found' for wrong id", async () => {
    const getUserById = jest.fn(() => "");

    userDatabase = {
      getUserById,
    };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    try {
      await userBusiness.getUserById("wrong-id");
    } catch (error) {
      expect(error.message).toBe("User not found");
      expect(error.errorCode).toBe(422);
    }
  });

  test("Should return 'Missing input' from empty id ", async () => {
    const id = "";
    const getUserById = jest.fn(() => {
      return id;
    });

    userDatabase = {
      getUserById,
    };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );
    try {
      await userBusiness.getUserById(id);
    } catch (error) {
      expect(error.message).toBe("Missing input");
      expect(error.errorCode).toBe(422);
    }
  });

  test("Should return the userData in success id", async () => {
    const id = "id";
    const getUserById = jest.fn(() => {
      return new User(id, "Felipe", "felipe@email.com", "hash", UserRole.ADMIN);
    });

    userDatabase = {
      getUserById,
    };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.getUserById(id);
    expect(result).toEqual({
      email: getUserById().getEmail(),
      id: getUserById().getId(),
      role: getUserById().getRole(),
      name: getUserById().getName(),
    });
  });
});
