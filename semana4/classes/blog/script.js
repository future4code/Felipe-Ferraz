'use strict'
let array = []
class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function novoPost(titulo, autor, conteudo) {
    let inputTitulo = document.getElementById('titulo')
    let inputAutor = document.getElementById('autor')
    let inputConteudo = document.getElementById('conteudo')
    titulo = inputTitulo.value
    autor = inputAutor.value
    conteudo = inputConteudo.value
    let aux = new Post(titulo, autor, conteudo)
    array.push(aux)
    inputTitulo.value=""
    inputAutor.value=""
    inputConteudo.value=""
    console.log(array)
    inserirPost()
}

function inserirPost(){
    for (let itens of array){
        console.log(itens)
        document.getElementById("mostrarPost").innerHTML +=itens
    }
   
}