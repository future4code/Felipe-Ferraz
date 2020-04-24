const operator = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

if (operator === undefined && n1 === undefined && n2 === undefined) {
  console.log("\x1b[31m", "É necessário 3 parâmetroso");
} else {
  switch (operator) {
    case "add":
      return console.log(n1 + n2);
    case "sub":
      return console.log(n1 - n2);
    case "div":
      return console.log(n1 / n2);
    case "mult":
      return console.log(n1 * n2);
    default:
      console.log("ocorreu um erro");
  }
}
