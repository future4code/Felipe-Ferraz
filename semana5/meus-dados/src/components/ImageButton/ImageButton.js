import React from 'react'
import './ImageButton.css'

function ImageButton(props){
    return(
        <div className="image-button">
            <a href={props.link}  > <img src={props.imagem} /> {props.texto}</a>
        </div>
    )
}

export default ImageButton