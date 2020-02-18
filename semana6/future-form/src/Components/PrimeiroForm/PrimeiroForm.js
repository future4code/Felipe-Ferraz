import React from 'react'
import styled from 'styled-components'


const ContainerForm = styled.div`
display:flex;
justify-content: space-evenly;
flex-direction:column;
align-self: center; 
height: 100%;
`
class PrimeiroForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }

    }

    render() {
        return (
            <ContainerForm>
                <h3>ETAPA 1- DADOS GERAIS</h3>
                <span>1. Qual o seu nome?</span>
                <input></input>
                <span>2. Qual sua idade?</span>
                <input></input>
                <span>3. Qual seu email?</span>
                <input type='email'></input>
                <span>4. Qual a sua escolaridade?</span>
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo" selected>Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensimo superior completo">Ensino superior completo</option>
                </select>
            </ContainerForm>


        )

    }
}

export default PrimeiroForm




