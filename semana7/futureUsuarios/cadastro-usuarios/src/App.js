import React from 'react';
import CadastroUsuario from './components/CadastroUsuario'
import ListaUsuarios from './components/ListaUsuarios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      paginaASerExibida: true
    }
  }

  mudarPagina = () =>{
    console.log(this.state.paginaASerExibida)
    let novaPagina = this.state.paginaASerExibida
    if(novaPagina){
      novaPagina = false
    }
    else{
      novaPagina = true
    }
    this.setState({
      paginaASerExibida : novaPagina
    })
  }

  ExibirPagina = () => {
    const alterarPagina = this.state.paginaASerExibida
    return (
      alterarPagina ? <CadastroUsuario
      mudarPagina={this.mudarPagina}
       /> : <ListaUsuarios
       mudarPagina={this.mudarPagina}
       />

    )

  }

  render() {
    return (
      <div >
        {this.ExibirPagina()}
      </div>
    );
  }
}

export default App;
