import React from 'react';
import './App.css';
import styled from 'styled-components';
import PrimeiroForm from './Components/PrimeiroForm/PrimeiroForm';
import SegundoForm from './Components/SegundoForm/SegundoForm';
import TerceiroForm from './Components/TerceiroForm/TerceiroForm'
import QuartoForm from './Components/QuartoForm/QuartoForm'

const Container = styled.div`
display: flex;
border: 1px solid black;
height:70vh;
width: 40vw;
align-items:center;
flex-direction:column;
margin: auto;
`
let BotaoMudarPagina = styled.button`
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NumeroEtapa: 1,
      ExibirTela: <PrimeiroForm />,
    }

  }

  MudarEtapa = () => {
    let aux = this.state.NumeroEtapa
    aux ++
    this.setState({
      NumeroEtapa: aux
    })
    this.MostarEtapa(aux)
    console.log(this.state.NumeroEtapa)
  }

  MostarEtapa = (aux) =>{
    switch (aux) {
      case 1:
        return this.state.ExibirTela = <PrimeiroForm />
      case 2:
        return this.state.ExibirTela = <SegundoForm />
      case 3:
        return this.state.ExibirTela = <TerceiroForm />
      case 4:
        return this.state.ExibirTela = <QuartoForm />
    }
  }
  render() {
   
    return (
      <Container>
        {this.state.ExibirTela}
        {this.state.NumeroEtapa  < 4 && <BotaoMudarPagina onClick={this.MudarEtapa}>Próxima página</BotaoMudarPagina>}
        
      </Container>
    );
  }
}

export default App;
