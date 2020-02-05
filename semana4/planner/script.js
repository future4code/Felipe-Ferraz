'use strict'
let segunda = document.querySelector("#segunda>ul")
let terca = document.querySelector("#terca>ul")
let quarta = document.querySelector("#quarta>ul")
let quinta = document.querySelector("#quinta>ul")
let sexta = document.querySelector("#sexta>ul")
let sabado = document.querySelector("#sabado>ul")
let domingo = document.querySelector("#domingo>ul")
let hora = document.getElementById('hora')
function adicionarTarefa() {
    const diaSemana = document.getElementById("dia-semana").value
    let tarefa = document.getElementById("nome-tarefa").value
    if (vefificarValorVazio(tarefa) === true) {
        alert("insira uma tarefa")
    }
    else {
        AdicionarTexto(diaSemana, tarefa)
        limparImput()
        riscarTarefa()
    }
}
function vefificarValorVazio(tarefa) {
    if (tarefa === "") {
        return true
    }
    else {
        console.log(tarefa)
        return false
    }
}
function AdicionarTexto(diaSemana, tarefa) {
    switch (diaSemana) {
        case "segunda":
            segunda.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
        case "terca":
            terca.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
        case "quarta":
            quarta.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
        case "quinta":
            quinta.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
        case "sexta":
            sexta.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
        case "sabado":
            sabado.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
        case "domingo":
            domingo.innerHTML += "<li>" + tarefa + " às "+ hora.value +" horas" +"</li>"
            break
    }
}
function limparImput() {
    let input = document.getElementById("nome-tarefa")
    input.value = ""
}
function riscarTarefa() {
    let tarefa = document.querySelectorAll("li")
    for (let item of tarefa) {
        item.addEventListener('click', function () {
            if (verificarTarefaRiscada(item) === false) {
                item.classList.add('riscoCentro')
            }
            else {
                item.classList.remove('riscoCentro')
            }
        })
    }
}
function verificarTarefaRiscada(item) {
    if (item.classList.contains('riscoCentro') === true) {
        return true
    }
    else {
        return false
    }
}
function limparTarefas(){
    segunda.innerHTML = ""
    terca.innerHTML = ""
    quarta.innerHTML = ""
    quinta.innerHTML = ""
    sexta.innerHTML = ""
    sabado.innerHTML = ""
    domingo.innerHTML = ""
}
