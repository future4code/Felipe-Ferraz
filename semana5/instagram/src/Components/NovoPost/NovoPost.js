import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const ContainerForm = styled.form`
display: flex;
flex-direction:column;
width: 50%;
`

class NovoPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeUsuario: '',
            fotoDoPost: '',
            fotoDoUsuario: '',
            form: [
                <input onChange={this.NomeDoUsuario} placeholder="Nome do usuário"></input>,
                <input onChange={this.FotoDoUsuario} placeholder="foto do usuário"></input>,
                <input onChange={this.FotoDoPost} placeholder="foto do post"></input>,
            ],
            button: <button onClick={this.AdicionarPost} ></button>,
        }
    }
    AdicionarPost = () => {
        if (this.state.nomeUsuario == '' || this.state.fotoDoPost == '' || this.state.fotoDoUsuario == '') {
            alert('Preencha todos os valores')
        }
        else {
          //  console.log(this.state.nomeUsuario, this.state.fotoDoPost, this.state.fotoDoUsuario)
            this.props.onCriaPost(this.state.nomeUsuario, this.state.fotoDoPost, this.state.fotoDoUsuario)

        }   
    }

    NomeDoUsuario = (e) => {
        this.setState({
            nomeUsuario : e.target.value
        })

    }
    FotoDoUsuario = (e) => {
        this.setState({
            fotoDoUsuario : e.target.value
        })
        
    }
    FotoDoPost = (e) => {
        this.setState({
            fotoDoPost: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <ContainerForm>
                    {this.state.form}
                </ContainerForm>
                {this.state.button}
            </Container>
        )
    }
}


export default NovoPost