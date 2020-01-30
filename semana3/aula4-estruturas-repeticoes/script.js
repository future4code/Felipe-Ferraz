// EXERCÍCIO 1

// O código  está somando números em ordem crescente a partir do 0 até o 15 na variável let

//EXERCÍCIO 2

// A. O comando push adiciona números divisíveis por 5 na novaLista

// B. 10, 15, 30

// C. Caso a variável tivesse valor 3: [12, 15, 18, 21, 27, 30]
//  Caso a variável tivesse valor 4: [12]

//---------------------------------------------------------------
// DESAFIO

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal)/* enquanto 0 < 4*/ {
    let linha = "" /* Declara a variavel linha*/
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "0" /* asteriscos menor que (4+1) linha recebe o que ela tem +0*/
    }
    console.log(linha)
    quantidadeAtual++
}
/* Resposta:
0
00
000
0000
*/


//-------------------------------------------------------------
// EXERCÍCIO DE ESCRITA DE CÓDIGO


// A. a. Escreva um programa que devolva o maior e o menor números contidos no array original:

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0
let menorNumero = 10000
for (item of array) {
    if (maiorNumero < item) {
        maiorNumero = item
    }
    if (menorNumero > item) {
        menorNumero = item
    }
}
console.log("O maior número é " + maiorNumero + " e o menor número é " + menorNumero)

// B. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

let numbersdiv10 = []
for (item of array) {
    numbersdiv10.push(item / 10)
}
console.log(numbersdiv10)

// C. . Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
let numbersPair = []
for (item of array) {
    if (item % 2 === 0) {
        numbersPair.push(item)
    }
}
console.log(numbersPair)

// D. Escreva um programa que um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
let arrayIndiceNumber = []
for (let i = 0; i < array.length; i++) {
    arrayIndiceNumber.push("O elemento do index " + i + " é " + array[i])
}
console.log(arrayIndiceNumber)

//----------------------------------------------------------------------------
//DESAFIO 2
console.log("Vamos Jogar")
const chosenNumber = Number(prompt("Escolha um número"))
let testNumber
let attempts = 0
while (chosenNumber !== testNumber) {
    testNumber = Number(prompt("Tente advinhar o número escolhido:"))
    console.log("O número chutado foi " + testNumber)
    if (chosenNumber < testNumber){
        console.log("Errrrrrou, o número é menor")
        attempts += 1
    }
    else if (chosenNumber > testNumber){
        console.log("Errrrrrou, o número é maior")
        attempts += 1
    }
     else if (chosenNumber === testNumber){
        console.log("Acertou!!")
         attempts +=1
     }
     else{
     console.log("Digite apenas numeros")
     testNumber = 0
     chosenNumber = 0
     }
}
console.log("O número de tentativas foi: "+attempts)

//----------------------------------------------------------------------
//DESAFIO 3

console.log("Vamos Jogar")
const chosenNumber = Math.floor(Math.random() * 100 + 1) // Alterar o número para aleatório
let testNumber
let attempts = 0
//console.log(chosenNumber) usado para testar o código
while (chosenNumber !== testNumber) {
    testNumber = Number(prompt("Tente advinhar o número escolhido entre 1 e 100:"))//alteração na frase
    console.log("O número chutado foi " + testNumber)
    if (chosenNumber < testNumber) {
        2
        console.log("Errrrrrou, o número é menor")
        attempts += 1
    }
    else if (chosenNumber > testNumber) {
        console.log("Errrrrrou, o número é maior")
        attempts += 1
    }
    else if (chosenNumber === testNumber) {
        console.log("Acertou!!")
        attempts += 1
    }
    else {
        console.log("Digite apenas numeros")
        testNumber = 0
        chosenNumber = 0
    }
}
console.log("O número de tentativas foi: " + attempts)

// A alteração foi simples, alterei apenas 2 linhas de códigos. Tive que buscar na internet como gerar um número aleatório. Não sei o que poderia fazer para deixar o código mais simples. 