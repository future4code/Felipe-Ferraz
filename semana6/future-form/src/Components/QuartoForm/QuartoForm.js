import React from 'react'
import styled from 'styled-components'


const ContainerForm = styled.div`
display:flex;
justify-content: space-evenly;
flex-direction:column;
align-self: center; 
height: 100%;
`
class QuartoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <ContainerForm>
                <h3>O FORMULÁRIO ACABOU</h3>
                <h5>Muito obrigado por participar! Entraremos em contato!
</h5>
            </ContainerForm>
        )

    }
}

export default QuartoForm




