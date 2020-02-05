import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA
const BtnUm = document.getElementById("btnUm")
BtnUm.addEventListener("click", etapaUm, false)
function etapaUm() {
   console.log("Bem vindo ao jogo de Blackjack!")
   if (confirm("Quer iniciar um novo jogo?")) {
      let primeiraCartaPlayerUm = comprarCarta()
      let segundaCartaPlayerUm = comprarCarta()
      let primeiraCartaPlayerDois = comprarCarta()
      let segundaCartaPlayerDois = comprarCarta()
      let valorCartaPlayerUm = primeiraCartaPlayerUm.valor + segundaCartaPlayerUm.valor
      let valorCartaPlayerDois = primeiraCartaPlayerDois.valor + segundaCartaPlayerDois.valor
      console.log("Usuário - cartas: " + primeiraCartaPlayerUm.texto + " " + segundaCartaPlayerUm.texto + " - pontuação " + valorCartaPlayerUm)
      console.log("Computador - cartas: " + primeiraCartaPlayerDois.texto + " " + segundaCartaPlayerDois.texto + " - pontuação " + valorCartaPlayerDois)
      if (valorCartaPlayerUm > valorCartaPlayerDois) {
         console.log("O usuário ganhou")
      }
      else if (valorCartaPlayerDois > valorCartaPlayerUm) {
         console.log("O computador ganhou")
      }
      else {
         console.log("O jogo empatou")
      }
   } else {
      console.log("O jogo acabou")
   }
}
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */
