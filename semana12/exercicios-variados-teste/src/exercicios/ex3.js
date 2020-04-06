export function sorteiaNumero(min, max) {
  if (min > max) {
    min = max;
    max = min;
  }
  let result = parseInt(Math.random(min, max) * 10);
  if (result < min) {
    result = min;
  }
  return result;
}
