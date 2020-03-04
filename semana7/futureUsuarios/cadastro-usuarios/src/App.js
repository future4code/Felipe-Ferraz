import React from 'react';
import CadastroUsuario from './components/CadastroUsuario'
import ListaUsuarios from './components/ListaUsuarios'
import DetalhesUsuarios from './components/DetalhesUsuario'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paginaASerExibida: '1',
      idDetalhe :''
    }
  }

  mudarPagina = (numeroPagina, id) => {
    let idUsuario = id
    let paginaAtual = this.state.paginaASerExibida
    let novaPagina = numeroPagina
    if (novaPagina !== paginaAtual) {
      this.setState({
        paginaASerExibida: novaPagina,
        idDetalhe: idUsuario
      })
    }
  }

teste = (id) =>{
  console.log(id)
}
  
  ExibirPagina = () => {
    const alterarPagina = this.state.paginaASerExibida
    switch (alterarPagina) {
      default: return (
        <CadastroUsuario
          mudarPagina={this.mudarPagina}
        />
      )
      case '1': return (
        <CadastroUsuario
          mudarPagina={this.mudarPagina}
        />
      )
      case '2': return (
        <ListaUsuarios
          mudarPagina={this.mudarPagina}
        />
      )
      case '3': return (
        <DetalhesUsuarios
          mudarPagina={this.mudarPagina}
          idBusca = {this.state.idDetalhe}
          a ={this.teste}
          

        />
      )

    }

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
