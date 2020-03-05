import React from 'react';
import styled from 'styled-components'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'

const Container = styled.div`
display: flex;
flex-direction:column;
width: 100vw;
`

const Header = styled.header`
background-color: red;
width: 100vw;
height: 10vh;
color: white;
text-align: center;
`
const Wrapper = styled.div`
width: 50vw;
border: 1px solid yellow;
align-self: center;
height: 90vh;
display: flex;
flex-direction:column;

`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PokemonDetail: ''
    }
  }

  
transferNamePokemon = (nome) => {
    const newPokemon = nome
    this.setState({ PokemonDetail: newPokemon })
  }
  render() {
    return (
      <Container >
        <Header>
          <h1>
            Bem vindo a biblioteca Pokemon
          </h1>
        </Header>
        <Wrapper>
          <PokemonList
            transferNamePokemon={this.transferNamePokemon}
          />
          {this.state.PokemonDetail && 
          <PokemonDetails
          PokemonDetail={this.state.PokemonDetail} 
          />}
        </Wrapper>
      </Container>
    );
  }
}
export default App;
