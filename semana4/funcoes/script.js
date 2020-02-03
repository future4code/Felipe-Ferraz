'use strict'
// ### Enunciado

// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// Leia o código abaixo:

// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }


// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`

// O retorno será []

// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`

// O retorno será [0,1,0,1,2,3]

// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`

// O retorno será [0,1,0,1,2,3,0,1,2,3,4,5]

// EXERCÍCIO 2

// Leia o código abaixo:

// let arrayDeNomes = [0,1,2,3,4];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

//     console.log(funcao(arrayDeNomes, "Darvas"));
//     console.log(funcao(arrayDeNomes, "João"));
//     console.log(funcao(arrayDeNomes, "Paula"));

// a. Explicite quais são as saídas impressas no console

// O console vai imprimir o índice que corresponde ao nome do array, por exemplo o primeiro console vai imprimir 0. O nome Darvas corresponde ao elemento de índice 0 do array.

// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.

// Sim, ela iria retorna o índice do número pesquisado.


// EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!

//     function metodo(array) {
//       let resultadoA = 0;
//       let resultadoB = 1;
//       let arrayFinal = [];
//       for (let x of array) {
//         resultadoA += x;
//         resultadoB *= x;
//       }
//       arrayFinal.push(resultadoA);
//       arrayFinal.push(resultadoB);
//       return arrayFinal;
//     }

// A função soma os itens do array a variável resultadoA e os multiplica na variável resultadoB. Retornando um array com a soma e a multiplicação final.
// Um nome possível é: function SomarEMultiplicarItensArray

// **Exercícios de escrita de código**

// EXERCÍCIO 4

// Escreva as funções explicadas abaixo:

// a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro

function converterIdadeCachorroIdadeHumano(idadeCachorro) {
    let idadeHumano = idadeCachorro * 7
    return "A idade de cachorro "+ idadeCachorro +" anos equivale a " + idadeHumano + " de idade humano"
}

console.log(converterIdadeCachorroIdadeHumano(4))

// b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), o endereço (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//     Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

function dadosPessoais(nome, idade, endereco, estuda) {
    if (estuda === true) {
        estuda = "sou"
    }
    else {
        estuda = "não sou"
    }
    return " Oi sou " + nome + ", tenho " + idade + "anos, moro em " + endereco + " e " + estuda + " estudante."
}

console.log(dadosPessoais("Felipe", 27, "Rua Olavo Bilac", true))

// EXERCÍCIO 5

// O propósito desse exercício é que você determine a qual século um ano pertence. Para isso, considere as seguintes afirmações:

// 1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, pode implementar para um intervalo maior)
// 2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]`
//     - Algarismos Romanos
// 3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor

let seculo // Deve ser implementado o this
function converterAnoEmSeculo(ano) {
    if (ano > 1000 && ano <= 1100) {
        seculo = "XI"
    }
    else if (ano <= 1200) {
        seculo = "XII"
    }
    else if (ano <= 1300) {
        seculo = "XIII"
    }
    else if (ano <= 1400) {
        seculo = "XIV"
    }
    else if (ano <= 1500) {
        seculo = "XV"
    }
    else if (ano <= 1600) {
        seculo = "XVI"
    }
    else if (ano <= 1700) {
        seculo = "XVII"
    }
    else if (ano <= 1800) {
        seculo = "XVIII"
    }
    else if (ano <= 1900) {
        seculo = "XX"
    }
    else {
        seculo = "XXI"
    }
    return seculo
}
function apresentarSeculo(ano) {

    if (ano < 1000 || ano > 2020) {
        console.log("Forneca ano entre 1000dc e 2020dc")
    }
    else {
        converterAnoEmSeculo(ano)
    }
    return "O ano " + ano + " pertence ao século " + seculo
}
console.log(apresentarSeculo(1630))

// EXERCÍCIO 6

// Para os itens a seguir, considere o seguinte array para os seus testes:

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

function quantidadeElementoNoArray(array) {
    return array.length
}

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function verificarNumeroPar(numero) {
    if (numero % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

function verifcarNumerosParesArray(array) {
    let QuantidadeNumerosPares = 0
    for (let item of array) {
        if (item % 2 === 0) {
            QuantidadeNumerosPares += 1
        }
    }
    return QuantidadeNumerosPares
}
console.log(verifcarNumerosParesArray(array))

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

function somarQuantidadeNumerosPares(array) {
    let QuantidadeNumerosPares = 0
    for (let item of array) {
        if (verificarNumeroPar(item) === true) {
            QuantidadeNumerosPares++
        }
    }
    return QuantidadeNumerosPares
}
console.log(somarQuantidadeNumerosPares(array))
