import React from 'react';
import './App.css';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';
import ImageButton from './components/ImageButton/ImageButton';


function App() {
  return (
    <div className="App">
        <h1> Dados Pessoais</h1>
      <BigCard titulo={' Felipe Ferraz'} conteudo={'Olá eu sou o Felipe, estudante da Future4. Faço o curso de desenvolvimento Full Stack.'} imagem = {require("./imagens/felipe.jpeg")} />
      <SmallCard imagem ={ require("./imagens/email.jpg") } title ='Email' conteudo = 'felipeefrz1991@gmail.com'/>
      <SmallCard imagem ={ require("./imagens/endereco.jpg") } title ='Endereço' conteudo = 'Santa Luzia - MG'/>
      <ImageButton texto='Ver mais' />
      <h3>Experiências profissionais</h3>
      <BigCard titulo={' UFMG'} imagem = {require("./imagens/ufmg.png")} conteudo = 'Formado em ciências biológicas na UFMG'/>
      <BigCard titulo={' Future4'} imagem = {require("./imagens/future.png")} conteudo ='Curso de desenvolvimento Full Stack'   />
      <h3>Minhas redes sociais</h3>
      <ImageButton imagem={require("./imagens/logo-facebook.png")} texto='Facebook'/>
    </div>

  );
}

export default App;
