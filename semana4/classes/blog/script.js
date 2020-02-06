'use strict'
class Post {
    constructor(titulo, autor, conteudo){
    this.titulo = titulo
    this.autor = autor
    this.conteudo = conteudo
    }
}

function novoPost(titulo, autor, conteudo){
    titulo = document.getElementById('titulo').value
    autor = document.getElementById('autor').value
    conteudo = document.getElementById('conteudo').value
    let aux = new Post (titulo, autor, conteudo)
}