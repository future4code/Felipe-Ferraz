import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';
import NovoPost from './Components/NovoPost/NovoPost';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      novoPost: [
        {
          nomeUsuario: '',
          fotoDoUsuario: ''
        },
      ],
    }
  }
  onCriaPost = (nomeUsuario, fotoDoPost, fotoDoUsuario) => {
    const arrayAux = []
    const arrayDePosts = [... this.state.novoPost]
    arrayDePosts.forEach((elemento, indice) => {
      elemento.nomeUsuario = nomeUsuario
      elemento.fotoDoUsuario = fotoDoUsuario
    })
      arrayAux.push(arrayDePosts)
    // arrayDePosts.push(novoPost)
    console.log(arrayAux)
    this.setState({
      novoPost: arrayAux
    })
  }
  render() {
    return (
      <div>
        <Post imagem={require('./imagens/post1.jpg')} nome="Felipe Ferraz" />
        <Post imagem={require('./imagens/post2.jpg')} nome="Felipe Ferraz" />
        <Post imagem={require('./imagens/post3.jpg')} nome="Felipe Ferraz" />
        <Post imagem={this.state.fotoDoPost} nome={this.state.nomeUsuario} />
        <NovoPost onCriaPost={this.onCriaPost} />

      </div>
    )
  }

}


export default App;
