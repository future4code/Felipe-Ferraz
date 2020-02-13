import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';

function App() {
  return (
    <div >
      <Post imagem = {require('./imagens/post1.jpg')}/>
      <Post imagem = {require('./imagens/post2.jpg')}/>
      <Post imagem = {require('./imagens/post3.jpg')}/>

      
    </div>
  );
}

export default App;
