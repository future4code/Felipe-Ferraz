import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  it("Primeiro teste multiplo de 400", () => {
    const result = anoBissexto(400);
    expect(result).toBe(true);
  });

  it("Segundo teste multiplo de 100", () => {
    const result = anoBissexto(2000);
    expect(result).toBe(true);
  });
  it("Terceiro teste multiplo de 5", () => {
    const result = anoBissexto(5);
    expect(result).toBe(false);
  });
});
