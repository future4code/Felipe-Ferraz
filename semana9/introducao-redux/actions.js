
function criarTarefa(tarefa) {
    return {
        type: 'CRIAR_TAREFA',
        payload: {
            tarefas: tarefa // tem que adicionar a tarefa no array principal
        }
    }
}

function removerTodasTarefas() {
    return {
        type: 'REMOVER_TODAS_TAREFAS',
        payload: {
            tarefas: ''
        }
    }
}

function riscarTarefaFeita(id) {
    return {
        type: 'RISCAR_TAREFA',
        payload: {
            tarefas.tarefa.id : tarefas.tarefa.id //riscada 
        }
    }
}

function filtrarTarefasFeitas(tarefasRealizadas) {
    return {
        type: 'FILTRAR_TAREFAS_FEITAS',

        payload: {
            tarefas: tarefasRealizadas
        }
    }
}

function filtrarTarefasNaoFeitas(tarefasNaoRealizadas) {
    return {
        type: 'FILTRAR_TAREFAS_NAO_FEITAS',

        payload: {
            tarefas: tarefasNaoRealizadas
        }
    }
}

