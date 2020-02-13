import React from 'react'
import './Post.css'
//import { render } from '@testing-library/react'

let numeroCurtidasAuxiliar = 0 // Não achei lugar para definr a variável
// Não consegui implementar enviar com tecaldo pelo react let inputComentario = document.getElementById('inputComentario')



class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NumeroCurtidas: 0,
            like: true,
            favorite: require('../../imagens/favorite-off.svg'),
            coment: '',
            comentValue: true,
            enviar: '',
            NumeroComentarios: 0
        }
    }
    CurtirPost = () => {
        if (this.state.like) {
            this.setState({
                favorite: require('../../imagens/favorite.svg'),
                like: false,
                NumeroCurtidas: 1
            })
        }
        else {
            this.setState({
                favorite: require('../../imagens/favorite-off.svg'),
                like: true,
                NumeroCurtidas: 0
            })

        }

    }
    Comentar = () => {
        if (this.state.comentValue) {
            this.setState({
                coment: <input id="inputComentario"  placeholder="Escreva seu comentário" />,
                enviar: <button onClick ={this.EnviarComentario}>Enviar</button>,
                comentValue: false

            })
            //console.log('coment')
        }
        else {
            this.setState({
                coment: '',
                enviar: '',
                comentValue: true
            })
        }
    }
    EnviarComentario = () =>{
        numeroCurtidasAuxiliar ++
        this.setState({
            NumeroComentarios : numeroCurtidasAuxiliar,
            coment: '',
            enviar: '',
            comentValue: true
        })
    }
    render() {
        return (
            <div className='post ' onDoubleClick={this.CurtirPost}>
                <p className='titulo-post'> {this.props.nome} </p>
                <img className='img-post' src={this.props.imagem} />
                <div className='conjuntoBotoes'>
                    <div>
                        <img className='icone' src={this.state.favorite} onClick={this.CurtirPost} />
                        {this.state.NumeroCurtidas}
                    </div>
                    <div>
                        <img className='icone' src={require('../../imagens/comment.svg')} onClick={this.Comentar} />
                        {this.state.NumeroComentarios}
                    </div>
                </div>
                <div className='conjuntoBotoes' >
                    {this.state.coment}
                    {this.state.enviar }
                </div>
            </div>
        )
    }
}


export default Post