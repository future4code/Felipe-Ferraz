const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) // a. false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) // d. false

console.log("e. ", typeof resultado) // boolean

// Leia o código abaixo

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])

array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)

i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)
/*

a. O que é `array` e como se declara em `JS`?

    Array é um conjunto de elementos que pode ser armazenado dentro de variáveis. Se declara usando as chaves []

b. Qual o index inicial de um `array`?

    O index inicial de um array é 0


c. Como se determinar o tamanho do `array`?

    console.log(array.length)

d. Indique todas as mensagens impressas no console.
console.log('I. ', array)
console.log('II. ', array)
console.log('III. ', array.length)
console.log('IV. ', array[i], " e ", array[i+1])
console.log('V. ', array[i+1], " e ", valor)
console.log('VI. ', array[i])
console.log('VII. ', resultadoC)
*/

//----------------------------------------------------------
/*
**Exercícios de escrita de código**

1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

            (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

            (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

    a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

    c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

    d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
*/
/*
let tempKelvin = (77 - 32)*5/9 + 273.15
let tempFahrenheit = (80)*9/5 + 32
let temp30CelsiusFahrenheit= (30)*9/5 + 32
let temp30CelsiusKelvin = (temp30CelsiusFahrenheit - 32)*5/9 + 273.15

console.log("a. 77°F em  K = " + tempKelvin +"K")
console.log("b. 80°C em °F = " +tempFahrenheit+"°F")
console.log ("c. 30°C em °F e K = " + temp30CelsiusFahrenheit+"°F " + temp30CelsiusKelvin +"K")

let tempUsuarioCelsius = prompt("Digite uma temperatura em Celsius:")

let tempUsuarioFahrenheit = tempUsuarioCelsius*9/5 + 32
let tempUsuarioKelvin = (tempUsuarioFahrenheit - 32)*5/9 + 273.15

console.log("A temperatura " + tempUsuarioCelsius + " em °F é = " + tempUsuarioFahrenheit + "°F e em K é = " + tempUsuarioKelvin + " K")
*/


// -----------------------------------------------------------------
/* 2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:
    1. Qual o seu endereço?
    Resposta: Rua ABC, 123

    2. Qual a sua cor favorita?
    Resposta: Azul
*/
/*
let MaiorMinas = prompt("Porque o atético é o maior time de MG?")
console.log("Porque o atético é o maior time de MG?")
console.log("Resposta = " + MaiorMinas)

let Future4 = prompt("Qual melhor escola de programação?")
console.log("Qual melhor escola de programação?")
console.log(" Resposta = " + Future4)

let corFavorita = prompt("Qual sua cor favorita?")
console.log("Qual sua cor favorita?")
console.log("Resposta = " + corFavorita)

let localViagem = prompt("Qual local você gosta de viajar?")
console.log("Qual local você gosta de viajar?")
console.log("Resposta = " + localViagem)

let hobbie = prompt("Qual seu principal hobbie?")
console.log("Qual seu principal hobbie?")
console.log("Resposta = " + hobbie) */

// ---------------------------------------------------------

/*
3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba o valor do salário mínimo e a quantidade de quilowatts consumida por uma residência.

    a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

    b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
*/

let consumoKw = prompt("Qual a quantidade de quilowatts consimido?")
let valor280Kw =  280 * 0.05 * 30
console.log("O valor de 280Kw/h é = R$" + valor280Kw) 
let valor280KwDesconto = valor280Kw - (0.15* valor280Kw)
console.log(valor280KwDesconto)

