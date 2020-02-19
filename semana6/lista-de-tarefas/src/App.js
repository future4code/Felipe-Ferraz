import React from 'react';
import ListaTarefa from './components/ListaTarefa/ListaTarefa';
import styled from 'styled-components';
import './App.css'

const Container = styled.div`
text-align: center;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaTarefas: []
    }
  }

  salvarMensagem = (tarefas) => {
    const copiaArrayDeTarefas = [...this.state.listaTarefas,tarefas]
    this.setState({
      listaTarefas: copiaArrayDeTarefas
    })
  }

  riscarTarefa = (el) => {
      const copiaArray = [...this.state.listaTarefas]
      if(copiaArray.indexOf(el) !== -1){
        el.completa = !el.completa
      }
      this.setState({
        listaTarefas:copiaArray
      })
    
  }

  filtrarMensagem = (valor) =>{
    console.log(valor)
    console.log(this.state.listaTarefas)
    if(valor == 'true'){
     let test =this.state.listaTarefas.filter((el =>{
        return this.renderizarMensagem = () =>{
          
        }
      }))
      console.log(test)
    }
    else{
      let test =this.state.listaTarefas.filter((el =>{
        return el.completa ===false
      }))
      console.log(test)
    }

  }

renderizarMensagem = () => {
    return this.state.listaTarefas.map((el, index) => {
      return el.completa ? <li key={index} className="palavraRiscada " onClick={() => this.riscarTarefa(el)}>{el.texto}</li> : <li  key={index} onClick={() => this.riscarTarefa(el)}>{el.texto}</li>
    })
  }
  
render() {
  return (
    <Container>
      <h1 className="teste">Lista de Tarefas</h1>
      <ListaTarefa salvarMensagem={this.salvarMensagem} filtrarMensagem={this.filtrarMensagem}/>
      <ul>{this.renderizarMensagem()}</ul>
    </Container>
  );
}
}

export default App;
