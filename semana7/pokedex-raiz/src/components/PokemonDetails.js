import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Imagens = styled.div`
display: flex;
width: 80vw;
`

const ImagemPokemon = styled.img`
width: 60px;
`

const baseURL = "https://pokeapi.co/api/v2"

class PokemonDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonTarget: '',
            pokemonAbilities: [],
            pokemonTypes: [],
            pokemonStatsName: [],
            pokemonPhotos: [],
            pokemonStatsValue: []
        }
    }
    componentDidMount() {
        this.serachPokemon()
    }
    componentDidUpdate(previousProps) {
        if (previousProps.PokemonDetail !== this.props.PokemonDetail) {
            this.serachPokemon()
        }
    }

    serachPokemon = async () => {
        const target = this.props.PokemonDetail
        const response = await axios.get(`${baseURL}/pokemon/${target}`)
        const abilities = response.data.abilities.map(el => { return (el.ability.name) })
        const types = response.data.types.map(el => { return (el.type.name) })
        const statsName =response.data.stats.map(el => { return el.base_stat })
        const statusValue = response.data.stats.map(el => { return el.stat.name })
        
        const photos = Object.values(response.data.sprites)
        this.setState({
            pokemonAbilities: abilities,
            pokemonTypes: types,
            pokemonStatsName: statsName,
            pokemonStatsValue: statusValue,
            pokemonPhotos: photos,
        })
        console.log(statsName, statusValue)
    }

    test = () =>{
        const name = this.state.pokemonStatsName
        const value = this.state.pokemonStatsValue
        const test = name.map((elemento, index) =>{
           return (` ${value[index]}  ${elemento}  `)
       })
       console.log(test)
       return test
    }

    render() {
        return (
            <div>
                {<Imagens>{this.state.pokemonPhotos.map(img => {
                    return <ImagemPokemon src={img} />
                })}</Imagens>}
                <div>
                    <ul></ul>
                    <span>Habilidades:</span>
                    {this.state.pokemonAbilities.map(skil => {
                        return (<li>{skil}</li>)
                    })}
                </div>
                <div>
                    <ul></ul>
                    <span>Tipo:</span>
                    {this.state.pokemonTypes.map(skil => {
                        return (<li>{skil}</li>)
                    })}
                </div>
                <ul>
                    {this.test()}
                </ul>
                        
            </div>
        )
    }
}
export default PokemonDetails