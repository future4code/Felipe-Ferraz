import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

const baseURL = "https://pokeapi.co/api/v2"

const Wrapper = styled.div`
align-self: center;
display: flex;
flex-direction:column;
align-items: center;

`
const SelectPokemon = styled.select`
height: 8vh;
width: 50%;
text-align: center;
`
const OptionSelect = styled.option`
font-family: sans-serif;
font-size: 1.5em;
padding: 5px;

`

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: []
        }
    }
    componentDidMount() {
        this.PokemonsList()
    }

    PokemonsList = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ pokemonList: response.data.results })
    }

    hendleNamePokemon = (e) => {
        const namePokemon = e.target.value
        this.props.transferNamePokemon(namePokemon)
    }

    render() {
        return (
            <Wrapper>
                <h1>
                    Selecione o pokemon da lista para ter acesso a seus atributos
                </h1>
                <SelectPokemon onChange={this.hendleNamePokemon}>
                    <OptionSelect>Selecione um pokemon raiz da lista</OptionSelect>
                    {this.state.pokemonList.map((pokemon) => {
                        return (<OptionSelect value={pokemon.name}>{pokemon.name}</OptionSelect>)
                    })}
                </SelectPokemon>
            </Wrapper>
        )
    }
}


export default PokemonList