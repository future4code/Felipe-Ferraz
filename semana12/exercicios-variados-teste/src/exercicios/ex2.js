export function checaPalindromo(frase) {
  const fraseSemEspaco = frase.replace(/ /g, "").replace(/-/g, "");
  const fraseInvertida = frase
    .split("")
    .reverse()
    .join("")
    .replace(/ /g, "")
    .replace(/-/g, "");
  return fraseInvertida === fraseSemEspaco;
}
