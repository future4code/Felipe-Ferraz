import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5em;
`

const Imagens = styled.div`
display: flex;
justify-content: space-between;
`

const ImagemPokemon = styled.img`
width: 200px;
background-color:rgba(0,0,255,0.1);
border-radius: 50%;
`

const WrapperAbilities = styled.div`
display: flex;
justify-content: space-around;
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
        const statsName = response.data.stats.map(el => { return el.base_stat })
        const statusValue = response.data.stats.map(el => { return el.stat.name })

        const photos = [response.data.sprites.back_default, response.data.sprites.front_default]
        this.setState({
            pokemonAbilities: abilities,
            pokemonTypes: types,
            pokemonStatsName: statsName,
            pokemonStatsValue: statusValue,
            pokemonPhotos: photos,
        })
    }

    statsRender = () => {
        const name = this.state.pokemonStatsName
        const value = this.state.pokemonStatsValue
        const stats = name.map((elemento, index) => {
            return (<tr>  {value[index]} :   {elemento}   </tr>)
        })
        return stats
    }

    render() {
        return (
            <Wrapper>
                {<Imagens>{this.state.pokemonPhotos.map(img => {
                    return <ImagemPokemon src={img} />
                })}</Imagens>}
                <WrapperAbilities>
                    <table>
                        <tr>Habilidades:</tr>
                            {this.state.pokemonAbilities.map(skil => {
                                return (<tr>{skil}</tr>)
                            })}
                        
                    </table>
                    <table>
                        <tr> Tipo:</tr>
                            {this.state.pokemonTypes.map(skil => {
                                return (<tr>{skil}</tr>)
                            })}
                    </table>
                    <table>
                        <tr>Atributos:</tr>        
                            {this.statsRender()}
                    </table>
                </WrapperAbilities>
            </Wrapper>
        )
    }
}
export default PokemonDetails