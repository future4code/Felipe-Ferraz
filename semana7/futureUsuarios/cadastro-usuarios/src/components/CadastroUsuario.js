import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastro = styled.div`
margin: auto;
height: 30vh;
width: 35vw;
border: 1px solid cyan;
text-align: center;
margin-top: 20px;

`

const ButtonSalvar = styled.button`
background-color: blue;
color: white;
border-radius: 30%;

`

class CadstroUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: ''
        }
    }

    inputName = (e) => {
        const novoValor = e.target.value
        this.setState({
            name: novoValor
        })
    }
    inputEmail = (e) => {
        const novoValor = e.target.value
        this.setState({
            email: novoValor
        })
    }

    criarUsuario = () => {
        const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
        const novoUsuario = {
            name: this.state.name,
            email: this.state.email
        }
        const promessaNovoUsuario = axios.post(
            `${baseUrl}/users/createUser`, novoUsuario,
            {
                headers:
                    {'api-token': 'felipe'}
         
             }
        );
             promessaNovoUsuario.then(response =>{
                 alert("Usuário criado com sucesso")
                 this.setState({
                     name: '',
                     email: '',
                 })
             })
             .catch(error =>{
                 console.log(error)
             });
             
}
render() {
    return (
        <ContainerCadastro>
            <span>Nome:</span>
            <input
                value={this.state.name}
                onChange={this.inputName}
            />

            <span>Email:</span>
            <input
                value={this.state.email}
                onChange={this.inputEmail}
            />
            <ButtonSalvar
                onClick={this.criarUsuario}
            >
                Salvar Novo Usuario
                </ButtonSalvar>

            <button
                onClick={() => this.props.mudarPagina('2')}
            >Lista de usuários
    
        </button>
        
        </ContainerCadastro>
    )
}
}
export default CadstroUsuario