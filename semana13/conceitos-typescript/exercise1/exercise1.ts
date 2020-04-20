function sum(n1: number, n2: number): void {
  console.log("a soma é :" + (n1 + n2)),
    console.log("a subtração é :" + (n1 - n2)),
    console.log("a multiplicação desses numeros é :" + n1 * n2);
  if (n1 > n2) {
    console.log("o maior numero é :", n1);
  } else {
    console.log("O maior número é :", n2);
  }
}

sum(5, 2);
