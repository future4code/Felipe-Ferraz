import { Character } from "../src/model/character";
import { validateCharacter } from "../src/controller/characterController";

test("testing input where name empty", () => {
  const character: Character = {
    name: "",
    atk: 150,
    def: 80,
    life: 50,
  };

  const result = validateCharacter(character);

  expect(result).toBe(false);
});

test("testing input where live empty", () => {
  const character: Character = {
    name: "pikaxu",
    atk: 150,
    def: 80,
    life: undefined,
  };

  const result = validateCharacter(character);
  expect(result).toBe(false);
});

test("testing input where atk empty", () => {
  const character: Character = {
    name: "pikaxu",
    atk: undefined,
    def: 80,
    life: 20,
  };
  const result = validateCharacter(character);
  expect(result).toBe(false);
});

test("testing input where def empty", () => {
  const character: Character = {
    name: "pikaxu",
    atk: 200,
    def: undefined,
    life: 20,
  };
  const result = validateCharacter(character);
  expect(result).toBe(false);
});

test("testing input where def as negative value", () => {
  const character: Character = {
    name: "pikaxu",
    atk: 200,
    def: -20,
    life: 20,
  };
  const result = validateCharacter(character);
  expect(result).toBe(false);
});

test("testing input where atk as zero value", () => {
  const character: Character = {
    name: "pikaxu",
    atk: 0,
    def: 20,
    life: 20,
  };
  const result = validateCharacter(character);
  expect(result).toBe(false);
});

test("testing input where values corrects", () => {
  const character: Character = {
    name: "pikaxu",
    atk: 50,
    def: 20,
    life: 20,
  };
  const result = validateCharacter(character);
  expect(result).toBe(true);
});
