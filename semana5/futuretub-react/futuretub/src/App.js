import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1>FutureTube</h1>
          <input type="text" placeholder="Busca" />
          <img className="logo"alt="logo-gmail" src={require("./imagens/logo-gmail.jpg")}></img>
          <img className="logo"alt="logo-video" src={require("./imagens/logo-video.png")}></img>
          <img className="logo"alt="logo-notificacao" src={require("./imagens/notificacao.png")}></img>
        </header>
        <main class="menu-flex">
          <ul class="menu-ul">
            <li>Inicio</li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li class="border-bottom">Originais</li>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>

          <div className="container">
            <div className="div-destaque media-box">
              <img className=""alt="VideoFormula1" src={require("./imagens/destaque.jpg")}></img>
              <p className="title">Vídeo Destaque</p>
            </div>
            <div className="anuncio">
              <img className=""alt="Video anuncio" src={require("./imagens/anuncio.png")}></img>
              <h1>Venha conferir</h1>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video1.png")}></img>
              <div className="title">Vídeo 1</div>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video2.jpg")}></img>
              <p className="title">Vídeo 3</p>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video3.jpg")}></img>
              <p className="title">Vídeo 3</p>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video4.jpg")}></img>
              <p className="title">Vídeo 4</p>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video5.jpg")}></img>
              <p className="title">Vídeo 5</p>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video6.jpg")}></img>
              <p className="title">Vídeo 6</p>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video7.jpg")}></img>
              <p className="title">Vídeo 7</p>
            </div>
            <div className="media-box">
              <img src={require("./imagens/video8.jpg")}></img>
              <p className="title">Vídeo 8</p>
            </div>
          </div>
        </main>
        <footer>
          <p> Oi! Eu moro no footer! </p>
        </footer>
      </body>

    </div>
  );
}

export default App;
