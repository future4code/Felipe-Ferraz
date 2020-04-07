import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("Primeiro teste arara", () => {
    const result = checaPalindromo("arara");
    expect(result).toBe(true);
  });
  it("socorram-me subi no onibus em marrocos", () => {
    const result = checaPalindromo("socorram-me subi no onibus em marrocos");
    expect(result).toBe(true);
  });
  it("teste falso Hoje eu acordei", () => {
    const result = checaPalindromo("Hoje eu acordei");
    expect(result).toBe(false);
  });
});
