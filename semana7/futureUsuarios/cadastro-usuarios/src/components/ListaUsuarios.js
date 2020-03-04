import React from 'react'
import axios from 'axios'
import DetalhesUsuario from './DetalhesUsuario'

class ListaUsuarios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todosUsuarios: []
        }
    }
    componentDidMount() {
        this.salvarTodosUsuarios()
    }

    salvarTodosUsuarios = () => {
        const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
        const todosUsuarios = axios.get(
            `${baseUrl}/users/getAllUsers`,
            {
                headers:
                    { 'api-token': 'felipe' }
            }
        );
        todosUsuarios.then(response => {
            this.setState({ todosUsuarios: response.data.result })
        })
            .catch(error => {
                console.log(error)
            })
    }
    renderizar = () => {
        const nomeDeUsuarios = this.state.todosUsuarios
        return (
            nomeDeUsuarios.map((elemento) => {
                return <li key={elemento.id}>
                    {elemento.name}
                    <button
                        onClick={() => this.deletarNome(elemento.id)}
                    >Deletar
                    </button>
                    <button
                        onClick={
                            () =>this.props.mudarPagina('3', elemento.id)
                        }
                    >Detalhes dos Usuarios
                    </button>
                </li>
            })
        )
    }

    


    deletarNome = (id) => {
        const continuar = window.confirm('deseja deletar esse usuario?')
        if (continuar) {
            const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
            const deleteUsuario = axios.delete(`${baseUrl}/users/deleteUser?id=${id}
        `,
                {
                    headers:
                        { 'api-token': 'felipe' }
                }
            );
            deleteUsuario.then(response => {
                this.salvarTodosUsuarios()
                alert('usuario deletado com sucesso')
            })
                .catch(error => {
                    console.log(error)
                })

        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderizar()}
                </ul>
                <button
                    onClick={() => this.props.mudarPagina('1')}
                >Voltar</button>
            </div >
        )
    }
}

export default ListaUsuarios