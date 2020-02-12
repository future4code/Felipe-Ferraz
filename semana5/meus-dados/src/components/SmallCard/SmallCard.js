import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className="small-card">
            <img src={props.imagem} alt="Felipe" />
            <h6>{props.title}:</h6>
            <p>{ props.conteudo }</p>


        </div>
    )
}

export default SmallCard