// Exercícios de interpretação de código
//1)
// Será impresso no console o valor digitado pelo usuário no prompt multiplicado pelo valorEmDolar, nesse caso é 100

//------------------------------------------------------------------------
//2)
// O 1 console.log vai retornar a constante novoMontante que é 150 * o valor do investimento nesse caso 1.1
// O 2 console.log vai retornar um alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"

//------------------------------------------------------------------------
//3)
// O 1 console vai retornar: Quantidade total de números 14
// O segundo console vai retornar a quantidade de números pares : 6
//O 3 console vai retornar a quantidade de números ímpares: 8

//------------------------------------------------------------------------
//4) // O primeiro console imprime o menor número do array: 1
// O segundo console imprime o maior número do array: 1590

//------------------------------------------------------------------------
//Exercícios de lógica de programação
// Pode pecorrer uma lista usando alguns métodos, como o for in, o for e while ex:
// for (let el in array){
//    console.log el
//}

//------------------------------------------------------------------------
//2 A) F
//  B) T
//  C) T
//  D) T
//  E) T

//------------------------------------------------------------------------
// 3) O código não funciona. O i não tá sendo incrementando e sempre será valor 0
// Para funcionar, abaixo do console.log é necessário escrever i++

//------------------------------------------------------------------------
// 4)
// function classificarTriangulo(a,b,c){
//     if (a === b && a === c){
//         console.log("Triângulo Equilátero")
//     }
//     else if (a !== b && b !==c && a !==c){
//         console.log("Triângulo Escaleno")
//     }
//     else {
//         console.log("Triangulo Isóceles")
//     }  
// }

//------------------------------------------------------------------------
//5)
// function compararNumeros(a, b) {
//     if (a == b) {
//         alert("Digite numeros diferentes")
//     }
//     if (a > b) {
//         console.log(`${a} é maior do que ${b}`)
//     }
//     else {
//         console.log(`${b} é maior do que ${a}`)
//     }
//     if (a % b === 0 ){
//         console.log(`${a} divisível por ${b}`)
//         console.log(`${b} nao é divisível por ${a}`)
//     }
//     else if (b % a === 0){
//         console.log(`${b} divisível por ${a}`)
//         console.log(`${a} não é divisível por ${b}`)
//     }
//     else{
//         console.log(`Os números não são divisíveis entre si`)
//     }
//     if(a - b > 0){
//         let aux = a-b
//         console.log(`A diferença entre eles é ${aux}`)
//     }
//     else{
//         let aux = b - a
//         console.log(`A diferença entre eles é ${aux}`)
//     }
// }

//------------------------------------------------------------------------
// const array = [1,2,4,5,8,4,10,80,1,54,20]

// function imprimirSegundoMaiorEMenor(array){

// }

//------------------------------------------------------------------------
//Exercícios de Objetos
// 1) Array são estruturas que possuem um índice e um elemento. Já os objetos são estruturas mais complexas. Não possue índice e apresenta chave e valor.

//------------------------------------------------------------------------
//2)
// function criarRetangulo(lado1, lado2) {
//     let retangulo = {}
//     retangulo.lado1 = lado1
//     retangulo.lado2 = lado2
//     retangulo.perimetro = 2 * (lado1 + lado2)
//     retangulo.area = (lado1 * lado2)

//     console.log( retangulo)
// }
//------------------------------------------------------------------------
// 3)
// const filmeFavorito = {
//     Titulo : "Zumbilândia",
//     ano : 2020,
//     diretor : "Ruben Fleischer", 
//     ator1: "Woody Harrelson",
//     atriz1: "Jesse Eisenberg"
// }
// console.log(`Venha assistir ao filme ${filmeFavorito.Titulo} de ${filmeFavorito.ano} dirigido pelo diretor ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.ator1} e  ${filmeFavorito.atriz1}`)
//------------------------------------------------------------------------

// 4)
// const cadastro = {
//     nome : "Felipe",
//     idade : 28,
//     email : "felipeefrz1991@gmail.com",
//     endereco : "Santa Luzia - MG"
// }

// function anonimizarPessoa (cadastro){
//     let cadastroAnonimo = cadastro
//     cadastroAnonimo.nome = "ANÔNIMO"
//     console.log(cadastroAnonimo)
// }

// anonimizarPessoa(cadastro)
//------------------------------------------------------------------------
// Exercício de funções de array
//1)

// let cadastro = [
//     { nome: "Pedro", idade: 20 },
//     { nome: "João", idade: 10 },
//     { nome: "Paula", idade: 12 },
//     { nome: "Artur", idade: 89 }
// ]

// function maiorIdade(array) {
//         let MaiorDeIdade = array.filter((element) => {
//             return element.idade > 20
//         })
//     console.log(MaiorDeIdade)
//     }
// maiorIdade(cadastro)

//------------------------------------------------------------------------
//B)
// function menorIdade(array) {
//     let menorDeIdade = array.filter((element) => {
//         return element.idade < 20
//     })
// console.log(menorDeIdade)
// }
// menorIdade(cadastro)

//------------------------------------------------------------------------
//2) A)
const array = [1, 2, 3, 4, 5, 6]

function dobrarNumeros(array) {
    let dobro = array.map((element) => {
        return element * 2
    })
    console.log(dobro)
}

dobrarNumeros(array)

//------------------------------------------------------------------------
//2B)

function TriplicarNumeros(array) {
    let triplo = [] = array.map((element) => {
        return `${element * 3}`
    })
    console.log(triplo)
}



TriplicarNumeros(array)
//------------------------------------------------------------------------
//2C

function TransformarStringParOuImpar(array) {
    let arrayStrig = []
    for (let elements of array) {
        if (elements % 2 == 0) {
            arrayStrig.push(`${elements} é par`)
        }
        else {
            arrayStrig.push(`${elements} é ímpar`)
        }

    }
    console.log(arrayStrig)
}
TransformarStringParOuImpar(array)

//------------------------------------------------------------------------
// 3 A)
const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]

function FiltrarPessoasMontanhaRussa(array) {
    let pessoasAutorizadas = array.filter(element => {
        return element.idade > 14 && element.idade < 70 && element.altura > 1.5
    })
    console.log(pessoasAutorizadas)
}

FiltrarPessoasMontanhaRussa(pessoas)
//------------------------------------------------------------------------
// 3B)

function ApresentarPessoasNaoAutorizadas(array) {
    let pessoasNaoAutorizadas = array.filter(element => {
        return element.idade <= 14 || element.idade >= 60 || element.altura < 1.5
    })
    console.log(pessoasNaoAutorizadas)
}
ApresentarPessoasNaoAutorizadas(pessoas)

//------------------------------------------------------------------------
//4)
const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]
let consultaAtiva = []
let consultaCancelada = []
let mensagemCanceladaMasculina = []
let mensagemCanceladafeminina = []
let mensagemAtivaMasculina = []
let mensagemAtivaFeminina = []
function enviarEmail(array) {
    filtrarConsultaAtivo(array)
    filtrarConsultaCancelada(array)
    enviarMensagemCancelada()
    EnviarMensagemAtiva()
    console.log(consultaAtiva, consultaCancelada, mensagemCanceladafeminina, mensagemCanceladaMasculina, mensagemAtivaMasculina, mensagemAtivaFeminina)
}
function filtrarConsultaAtivo(array) {
    consultaAtiva = array.filter(element => {
        return element.cancelada == false
    })
    console.log(consultaAtiva)
}
function filtrarConsultaCancelada(array) {
    consultaCancelada = array.filter(element => {
        return element.cancelada == true
    })
    console.log(consultaCancelada)
}
function enviarMensagemCancelada() {
    consultaAtiva.forEach(el => {
        if (el.genero == "masculino") {
            mensagemCanceladaMasculina.push(`Olá, Sr ${el.nome}. Infelizmente, sua consulta marcada para o dia ${el.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        }
        else {
            mensagemCanceladafeminina.push(`Olá, Sra ${el.nome}. Infelizmente, sua consulta marcada para o dia ${el.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        }
    });
}
function EnviarMensagemAtiva() {
    consultaAtiva.forEach(el => {
        if (el.genero == "masculino") {
            mensagemAtivaMasculina.push(`Olá, Sr ${el.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${el.dataDaConsulta} or favor, acuse o recebimento deste e-mail.`)
        }
        else {
            mensagemAtivaFeminina.push(`Olá, Sra ${el.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${el.dataDaConsulta} or favor, acuse o recebimento deste e-mail.`)
        }
    })
}
//------------------------------------------------------------------------
// 5)
const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]
let aux2 = 0
let saldo
//console.log(contas)
function atualizarSaldo(contas) {
    pegarArrayCompras(contas)
    //console.log(saldo[0])
    somarContas()
    //console.log(saldo)
    contas.forEach((element, index)=>{
        element.saldoTotal -= saldo[index]
    }) 
    console.log(contas)
}
function pegarArrayCompras(contas) {
    saldo = contas.map(element => {
        return element.compras
    })
}
function somarContas() {
    for (let i = 0; i < saldo.length; i++) {
        let aux = saldo[i]
        //console.log(saldo[i])
        for (let elements of aux) {
            aux2 += elements
            //console.log(aux2)
        }
        saldo[i] = aux2
        aux2 = 0
    }
    //console.log(saldo)
}
