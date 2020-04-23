const numbersInArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function informDataOnArray(numbers: any[]): object {
  let sum: number = 0;

  for (let i of numbers) {
    sum += i;
  }

  let odd: number = 0;
  numbers.map((el) => {
    if (el % 2 !== 0) {
      odd += 1;
    }
  });

  return {
    lengthOnArray: numbers.length,
    numberOdd: odd,
    sum,
  };
}
console.log(informDataOnArray(numbersInArray));
