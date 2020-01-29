
//EXERCÍCIO 1
//Leia o código abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }

// Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"?

/* 
    O teste armazena um número que o usuário digitar em uma constante e testa se ele é par. Caso tenha digitado um número par, retorna a mensagem "Passou no teste". Caso não digite um número par, retorna a mensagem "Não passou no teste"
*/

//--------------------------------------------

// EXERCÍCIO 2

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM d.
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//  a.Para que serve o código acima ?

// O código acima serve para retorna o preço de produtos de acordo com o que o usuário digitar. 


//  b.Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"` ?

//"O preço da fruta Maça é R$ 2.25"

//  c.Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva.Qual seria o preço que você pagaria ?

//R$ 49.10

//  d.Considere que um usuário queira comprar uma`Pêra`, qual seria a mensagem impressa no console se retirássemos o`break` que está logo acima do `deafult`(o`break` indicado pelo comentário "BREAK PARA O ITEM d.") ?

// O preço da fruta Pêra é R$ 5

//----------------------------------------

//EXERCÍCIO 3

//Leia o código abaixo:

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

//Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.

// R: Haverá um erro. A variável mensagem foi criada dentro do escopo local pertencente ao bloco if.
// Sendo assim ela não pode ser acessada fora do mesmo. Com isso a mensagem "mensagem is not defined " aparece.

//------------------------------------------------------------------
// **Exercícios de escrita de código**

// EXERCÍCIO 4

// Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:

// a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

const numA = Number(prompt("Escreva um número"))
const numB = Number(prompt("Escreva um número"))

if (numA < numB) {
    console.log(numB + " - " + numA)
}
else console.log(numA + " - " + numB)

// Caso digite os numeros iguais, o console irá imprimir o conteúdo do else.

// b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

const numA = Number(prompt("Escreva o primeiro número"))
const numB = Number(prompt("Escreva o segundo número"))
const numC = Number(prompt("Escreva o terceiro número"))
if (numA > numB && numB > numC) {
    console.log(numA + " - " + numB + " - " + numC)
}
else if (numB > numA && numA > numC) {
    console.log(numB + " - " + numA + " - " + numC)
}
else if (numC > numB && numB > numA) {
    console.log(numC + " - " + numB + " - " + numA)
}
else if (numA > numC && numC > numB) {
    console.log(numA + " - " + numC + " - " + numB)
}
else if (numB > numC && numC > numA) {
    console.log(numB + " - " + numC + " - " + numA)
}
else {
    console.log(numC + " - " + numA + " - " + numB)
}
//c.Agora, impeça que o usuário digite 3 números iguais.Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.
const numA = Number(prompt("Escreva o primeiro número"))
const numB = Number(prompt("Escreva o segundo número"))
const numC = Number(prompt("Escreva o terceiro número"))

if (numA > numB && numB > numC) {
    console.log(numA + " - " + numB + " - " + numC)
}
else if (numB > numA && numA > numC) {
    console.log(numB + " - " + numA + " - " + numC)
}
else if (numC > numB && numB > numA) {
    console.log(numC + " - " + numB + " - " + numA)
} else if (numA > numC && numC > numB) {
    console.log(numA + " - " + numC + " - " + numB)
}
else if (numB > numC && numC > numA) {
    console.log(numB + " - " + numC + " - " + numA)
}
// linha nova

else if (numB == numC && numC == numA) {
    console.log("Digite ao menos um numero diferente")
}
else if (numC > numA && numA > numB) {
    console.log(numC + " - " + numA + " - " + numB)
}
else
    console.log("Digite números diferentes")


// EXERCÍCIO 5

// Vamos criar um programa que classifique os animais dados alguns critérios. O primeiro critério de divisão é se eles possuem ossos formando seu esqueleto ou não. Caso possuam, são **vertebrados**, caso contrário, **invertebrados**. O nosso foco é realizar a classificação só do primeiro caso. Se possuir pelos, entende-se que ele é um mamífero; e este pode ser classificado como um **ser humano** ou não (**mamífero não humano**), simplesmente, pelo fato dele ser considerado racional ou não. Se não for mamífero, entende-se que ele é uma **ave**, se possuir penas. Se não possuir, devemos entender uma característica importante: se ele é um animal terrestre. Se não for, diz-se que é um **peixe**; se  for, ele pode ser um **anfíbio** ou um **réptil**. Ele será o primeiro (anfíbio), se passar uma parte da vida em ambiente aquático; e será o segundo (réptil), caso contrário.

// - OBS

// a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício em si. (Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. Coloque este link num comentário durante a resolução deste exercício)

// b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado 

const VertebradoOuNao = prompt("O animal possui ossos formados por vertebras? s/n").toLocaleLowerCase()
if (VertebradoOuNao == "n") {
    console.log("Animal invertebrado")
}
if (VertebradoOuNao == 's') {
    const mamiferoOuNao = prompt("O animal possui pelo? s/n").toLocaleLowerCase()
    if (mamiferoOuNao == "s") {
        const humanoOuNao = prompt("O animal é racional? s/n").toLocaleLowerCase()
        if (humanoOuNao == "s") {
            console.log("O animal é um ser humano")
        }
        else console.log("Mamifero não humano")
    }
    if (mamiferoOuNao == "n") {
        const AveOuNao = prompt("O animal posui pena? s/n").toLocaleLowerCase()
        if (AveOuNao == "s")
            console.log("O animal é uma ave")
        else {
            const PeixeOuNao = prompt("O animal é terrestre? s/n").toLowerCase()
            if (PeixeOuNao == "n") {
                console.log("O animal é um peixe")
            }
            else {
                const AnfibioOuNao = prompt("O animal passa parte da vida na água?s/n").toLowerCase()
                if (AnfibioOuNao == "s") {
                    console.log("O animal é um anfíbio")
                }
                else {
                    console.log("O animal é um réptil")
                }
            }
        }
    }
}


// LINK DO DIAGRAMA: https://drive.google.com/file/d/1qekTiF118haWtXrv9303kSCWQ0rcjmyJ/view
//-------------------------------------------------------------------------------------

// DESAFIO
const nome = prompt("Digite seu nome");
const tipoJogo = prompt("Jogo internacional ou Doméstico? IN/DO")
const etapaJogo = prompt("Qual etapa do jogo? SF(Semi-final) DT( Decisão terceiro lugar ou FI(Final)")
let cat = Number(prompt("Qual categoria do ingresso? 1,2,3 ou 4"))
const qtde = prompt("Qual quantidade de engressos?")
let tipoJogoImpressao
let etapaJogoImpressao
let valorUnidade
let valorTotal

if (tipoJogo == "IN") {
    tipoJogoImpressao = "Internacional"
}
else
    tipoJogoImpressao = "Nacional"

if (etapaJogo == "SF") {
    switch (cat) {
        case 1 :  valorUnidade = 1320
            break;
        case 2: valorUnidade = 880
            break;
        case 3: valorUnidade = 550
            break
        case 4: valorUnidade = 220
            break
    }
}
if (etapaJogo == "DT") {
    switch (cat) {
        case 1: valorUnidade =660
            break;
        case 2: valorUnidade =440
            break;
        case 3: valorUnidade =330
            break
        case 4: valorUnidade =170
            break
    }
}
if (etapaJogo == "FI") {
    switch (cat) {
        case 1: valorUnidade =1920
            break;
        case 2: valorUnidade =1320
            break;
        case 3: valorUnidade =880
            break
        case 4: valorUnidade =330
            break
    }
}
valorTotal = valorUnidade * qtde
if (etapaJogo == "SF") {
    etapaJogoImpressao = "Semifinais"
}
else if (etapaJogo == "FI") { 
    etapaJogoImpressao = "Final"
}
else
    etapaJogoImpressao ="Decisão do 3 lugar"

if(tipoJogo == "IN"){
    valorTotal *= 4.10
}

console.log("---Dados da compra--")
console.log("Nome do cliente: " + nome)
console.log("Tipo do jogo:" + tipoJogoImpressao)
console.log("Etapa do jogo: " + etapaJogoImpressao)
console.log("Categoria " + cat)
console.log("Quantidade de Ingressos: " + qtde +" ingressos")
console.log("---Valores---")
console.log("Valor do ingresso: R$" +valorUnidade)
console.log("Valor total: R$" + valorTotal)