import { performAttack } from "../src/controller/characterController";
import { Character } from "../src/model/character";

test("testing jest.fn", () => {
  const mock = jest.fn(() => {
    return true;
  });
  const attacker: Character = {
    name: "pikaxu",
    life: 200,
    def: 15,
    atk: 300,
  };
  const defender: Character = {
    name: "bulbasaur",
    life: 400,
    def: 100,
    atk: 20,
  };

  performAttack(attacker, defender, mock);
  expect(mock).toBeCalledTimes(2);
  expect(mock).toReturnTimes(2);
  expect(defender.life).toBe(200);
});

test("testing jest.fn", () => {
  const mock = jest.fn(() => {
    return false;
  });
  const attacker: Character = {
    name: undefined,
    life: 200,
    def: 15,
    atk: 300,
  };
  const defender: Character = {
    name: "bulbasaur",
    life: 400,
    def: 100,
    atk: 20,
  };
  try {
    performAttack(attacker, defender, mock);
  } catch (error) {
    expect(error.message).toEqual("Invalid character");
    expect(mock).toBeCalledTimes(1);
    expect(mock).toReturnTimes(1);
  }
});
