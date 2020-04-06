import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  it("Primeiro teste maior que o minimo e maior que o máximo", () => {
    const result = sorteiaNumero(1, 100);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(100);
  });
  it("Segundo teste com entrada decimal", () => {
    const result = sorteiaNumero(5.1, 100);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(100);
  });
  it("Terceiro teste invertendo valores entrada ");
  const result = sorteiaNumero(100, 1);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(100);
});
