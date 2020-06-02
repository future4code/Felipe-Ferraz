import { Character } from "../model/character";

export const validateCharacter = (chacarter: Character): boolean => {
  if (!chacarter.name || !chacarter.atk || !chacarter.def || !chacarter.life) {
    return false;
  }
  if (chacarter.atk < 0 || chacarter.def < 0 || chacarter.life < 0) {
    return false;
  }

  return true;
};

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }
  if (attacker.atk >= defender.def) {
    defender.life -= attacker.atk - defender.def;
  }
};

export const recoverCharacters = (characters: Character[]): Character[] => {
  if (characters.length < 2) {
    throw new Error("Invalid character");
  }

  const response = characters.filter((value) => {
    value.life <= 1500;
  });
  return response;
};

export const increaseChatacterAttack = (
  character: Character,
  newAttack: number
): void => {
  if (!validateCharacter(character)) {
    throw new Error("Invalid character");
  }
  if (character.atk > newAttack) {
    throw new Error("Invalid atk");
  }

  character.atk = newAttack;
};

export const decreaseCharacterDefense = (
  character: Character,
  newDefense: number
): void => {
  if (!validateCharacter(character)) {
    throw new Error("Invalid character");
  }
  if (character.def < newDefense) {
    throw new Error("Invalid def");
  }
  character.def = newDefense;
};
