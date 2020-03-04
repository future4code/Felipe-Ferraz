import React from 'react'
import axios from 'axios'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

class DetalhesUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detalhesUsuarios: [],
            mostrarInput: false,
            valorInputNome: '',
            valorInputEmail: '',
        }
    }

    componentDidMount() {
        this.salvarIdUsuario()
    }

    salvarIdUsuario() {
        const Idinteresse = this.props.idBusca
        const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
        const dadosUsuario = axios.get(
            `${baseUrl}/users/getUser/${Idinteresse}`,
            {
                headers:
                    { 'api-token': 'felipe' }
            }
        );
        dadosUsuario.then(response => {
            this.setState({ detalhesUsuarios: response.data.result })
        })
            .catch(error => {
                console.log(error)
            })

    }

    renderizar = () => {
        const usuario = this.state.detalhesUsuarios
        return (
            <ul>
                <li>Nome: {usuario.name}</li>
                <li>Email:{usuario.email}</li>
            </ul>
        )

    }

    deletarNome = (id) => {
        const continuar = window.confirm('deseja deletar esse usuario?')
        if (continuar) {
            const deleteUsuario = axios.delete(`${baseUrl}/users/deleteUser?id=${id}
        `,
                {
                    headers:
                        { 'api-token': 'felipe' }
                }
            );
            deleteUsuario.then(response => {
                this.props.mudarPagina('2')
                alert('usuario deletado com sucesso')
                this.setState({
                    mostrarInput: false,
                    valorInputEmail: "",
                    valorInputNome: "",
                })
            })
                .catch(error => {
                    console.log(error)
                })

        }
    }

    lidarComInput = () => {
        const auxiliar = !this.state.mostrarInput
        this.setState({
            mostrarInput: auxiliar
        })
    }

    salvarEmail = (e) => {
        const novoValor = e.target.value
        this.setState({
            valorInputEmail: novoValor
        })
    }
    salvarNome = (e) => {
        const novoValor = e.target.value
        this.setState({
            valorInputNome: novoValor
        })
    }

    editarUsuario = () => {
        console.log(this.state.detalhesUsuarios.id)
        const usuario = {
            "user": {
                "id": this.state.detalhesUsuarios.id,
                "name": this.state.valorInputNome,
                "email": this.state.valorInputEmail
            }
        }
        const alterarUsuario = axios.put(`${baseUrl}/users/editUser`, usuario,
            {
                headers: { 'api-token': 'felipe' }
            }
        );
        alterarUsuario.then((response) => {
            alert('usuario alterado com sucesso')
            this.salvarIdUsuario()
        })
            .catch(error => {
                console.log(error)
            })

    }


    exibirContainerAlteracaoUsuario = () => {
        const alterarUsuario = this.state.mostrarInput
        let container
        if (alterarUsuario) {
            container = <div>
                <button
                    onClick={this.editarUsuario}
                >Salvar alteração
                            </button>
                <input placeholder="Alterar Nome"
                    value={this.state.valorInputNome}
                    onChange={this.salvarNome}
                />
                <input placeholder="Alterar email"
                    value={this.state.valorInputEmail}
                    onChange={this.salvarEmail}
                />
            </div>
        }

        else {
            container = <button
                onClick={this.lidarComInput}
            >Alterar usuário
                        </button>
        }
        return container
    }
    render() {


        return (
            <div>
                <button
                    onClick={
                        () => this.props.mudarPagina('2')
                    }
                >Voltar</button>
                {this.renderizar()}
                <button
                    onClick={
                        () => this.deletarNome(this.state.detalhesUsuarios.id)
                    }
                >Deletar</button>
                {this.exibirContainerAlteracaoUsuario()}
            </div>
        )
    }
}

export default DetalhesUsuario