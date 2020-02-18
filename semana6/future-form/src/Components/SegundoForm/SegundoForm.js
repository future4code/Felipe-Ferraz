import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.div`
display:flex;
justify-content: space-evenly;
flex-direction:column;
align-self: center; 
height: 100%;
`
class SegundoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teste: 'dsa'
        }

    }

    render() {
        return (
            <ContainerForm>
                <h3>ETAPA 2- DADOS GERAIS</h3>
                <span>5. Qual curso?</span>
                <input></input>
                <span>6. Qual a unidade de ensino?</span>
                <input></input>
            </ContainerForm>


        )

    }
}

export default SegundoForm




