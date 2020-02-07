class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}
let todasDespesas = []
function criarDespesas() {
    let novaDespesa = []
    let inputValor = document.getElementById('valor')
    let inputTipo = document.getElementById('tipo')
    let inputDescricao = document.getElementById('descricao')
    let valor = inputValor.value
    let tipo = inputTipo.value
    let descricao = inputDescricao.value
    if (validarDespesas(valor, tipo, descricao)) {
        alert("Preencha todos os valores")
    }
    else {
        novaDespesa.push(new Despesa(valor, tipo, descricao))
        todasDespesas.push(new Despesa(valor, tipo, descricao))
        //console.log(todasDespesas)
        adicionarNovaDespesa(novaDespesa)
        limparDescricao(inputValor, inputTipo, inputDescricao)
    }

}

function validarDespesas(valor, tipo, descricao) {
    if (valor === "" || tipo === "" || descricao === "")
        return true
}

function filtrarDespesas() {
    const valorMinimo = document.getElementById('valorMinimo').value
    const valorMaximo = document.getElementById('valorMaximo').value
    const tipoDespesas = document.getElementById('tipoDespesas').value
    if (validarFiltro(valorMinimo, valorMaximo, tipoDespesas)) {
        alert("Preencha todos os itens corretamente")
    }
    else {
        adicionarFiltro(valorMinimo, valorMaximo, tipoDespesas)
    }
    console.log(filtro)
}

function adicionarFiltro(valorMinimo, valorMaximo, tipoDespesas) {
    filtro = todasDespesas.filter(el => {
        return el.tipo === tipoDespesas && el.valor > valorMinimo && el.valor < valorMaximo
    });


}

function validarFiltro(valorMinimo, valorMaximo, tipo) {
    if (valorMaximo === "" || valorMinimo === "" || tipo === "") {
        return true
    }
    else {
        return false
    }
}

function limparFiltro() {
    let valorMinimo = document.getElementById('valorMinimo')
    let valorMaximo = document.getElementById('valorMaximo')
    let tipoDespesas = document.getElementById('tipoDespesas')
    valorMinimo.value = ""
    valorMaximo.value = ""
    tipoDespesas.value = ""
}

function limparDescricao(inputValor, inputTipo, inputDescricao) {
    inputValor.value = ""
    inputTipo.value = ""
    inputDescricao.value = ""

}

function adicionarNovaDespesa(array) {
    // console.log(array)
    // console.log(todasDespesas)
    let listaDespesas = document.getElementById('listaDespesas')
    array.forEach((item) => {
        listaDespesas.innerHTML += `<li> Tipo: ${item.tipo} </li>`
        listaDespesas.innerHTML += `<li> Descrição: ${item.descricao} </li>`
        listaDespesas.innerHTML += `<li> Valor: ${item.valor} </li>`
    })
}




