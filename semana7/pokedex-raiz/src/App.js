import React from 'react';
import styled from 'styled-components'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
const Container = styled.div`
border: 1px solid black;
`


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      PokemonDetail : ''
    }
  }



  transferirNomePokemon = (nome) =>{
    const newPokemon = nome
    this.setState({PokemonDetail : newPokemon})
  }



  render() {
    return (
      <Container >
        Olá
        <PokemonList
        transferirNomePokemon = {this.transferirNomePokemon}
         />
        {this.state.PokemonDetail && <PokemonDetails
         PokemonDetail = {this.state.PokemonDetail}/>}
        
      </Container>
    );
  }
}
export default App;
