var numbersInArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function informDataOnArray(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var i = numbers_1[_i];
        sum += i;
    }
    var odd = 0;
    numbers.map(function (el) {
        if (el % 2 !== 0) {
            odd += 1;
        }
    });
    return {
        lengthOnArray: numbers.length,
        numberOdd: odd,
        sum: sum
    };
}
console.log(informDataOnArray(numbersInArray));
