import React from 'react'
import './BigCard.css'

function BigCard(props) {
    return (
        <div className="big-card">
            <img src={props.imagem} />
            <div>
                <h5>{props.titulo}</h5>
                <p>{props.conteudo}</p>
            </div>
        </div>
    )
}


export default BigCard  