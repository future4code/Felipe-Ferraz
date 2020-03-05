import React from 'react'
import axios from 'axios'

const baseURL = "https://pokeapi.co/api/v2"

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: []
        }
    }
    componentDidMount() {
        this.ListaPokemons()
    }

    ListaPokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ pokemonList: response.data.results })
    }

    lidarComNomePokemon = (e) =>{
        const namePokemon = e.target.value
        this.props.transferirNomePokemon (namePokemon)
    }

    render() {
        return (
            <div>
                <select onChange={this.lidarComNomePokemon}>
                    <option>Selecione um pokemon raiz da lista</option>
                    {this.state.pokemonList.map((pokemon) => {
                        return (<option value={pokemon.name}>{pokemon.name}</option>)
                    })}
                </select>
            </div>
        )
    }
}


export default PokemonList