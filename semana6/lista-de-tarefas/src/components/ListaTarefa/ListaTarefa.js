import React from 'react';
import styled from 'styled-components';

const InputTarefa = styled.input`

`

const ButtonTarefa = styled.button`

`

class ListaTarefa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: ''

    }
  }
  salvarTarefa = (e) => {
    const valor = e.target.value
    this.setState({
      texto: valor
    })
  }

  transformarTarefaArray = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.texto,
      completa: false
    }
    this.props.salvarMensagem(novaTarefa)
  }

  salvarFiltro = (e) =>{
    const valor = e.target.value
    this.props.filtrarMensagem(valor)
  }

  render() {

    return (
      <div >
        <InputTarefa onChange={this.salvarTarefa} value={this.state.texto} />
        <ButtonTarefa onClick={this.transformarTarefaArray}>Adicionar Tarefa </ButtonTarefa>
        <div>
          <span>Filtrar</span>
          <select onChange={this.salvarFiltro} >
            <option defaultChecked value ={'nenhum'}> nenhum</option>
            <option value ={'true'}>Tarefas concluídas</option>
            <option value ={'false'}>Tarefas a fazer</option>
          </select>
        </div>

      </div>
    );
  }
}

export default ListaTarefa;
