import React from "react"

export default function Item(props){

    return(
        <div className="item">
        <img src={`../images/${props.img}`} alt={`imagem de ${props.name}`} className="nav-logo" />
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="price">{props.price}</div>
            </div>
            <div className="ingredients">{props.ingredients}</div>
        </div>
    )
}