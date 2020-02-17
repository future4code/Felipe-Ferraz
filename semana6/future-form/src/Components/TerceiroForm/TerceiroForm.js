import React from 'react'
import styled from 'styled-components'


const ContainerForm = styled.div`
display:flex;
justify-content: space-evenly;
flex-direction:column;
align-self: center; 
height: 100%;
`
class TerceiroForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        return (
            <ContainerForm>

                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <span>5. Por que você não terminou um curso de graduação?</span>
                <input></input>
                <span>6. Você fez algum curso complementar??</span>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso de inglês" selected>Curso de inglês</option>
                    <option value="Curso Técnico">Curso Técnico</option>
                </select>

            </ContainerForm>


        )

    }
}

export default TerceiroForm




