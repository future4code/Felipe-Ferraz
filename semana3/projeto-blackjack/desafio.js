import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

const BtnUm = document.getElementById("btnDois")
BtnUm.addEventListener("click", etapaDois, false)
function etapaDois() {
   let CartasPlayerUm = []
   let CartasComputador = []
   CartasPlayerUm.push(comprarCarta())
   CartasPlayerUm.push(comprarCarta())
   CartasComputador.push(comprarCarta())
   CartasComputador.push(comprarCarta())
let carta
   for (let item of CartasPlayerUm){
      carta =item
      console.log(carta)
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
