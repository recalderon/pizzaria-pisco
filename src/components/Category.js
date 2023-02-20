import React from "react"
import Item from './Item'
import itemData from "./ItemData"

export default function Category(props){
    const itemsElements = itemData.map(function(item, index){
        if (item.category === props.name){
            return (<Item name={item.name} price={item.price} ingredients={item.ingredients} key={index} img={item.img}/>)
        }else{
            return
        }
    })
    return (
        <div className={`category ${props.name.toLowerCase()}`}>
            <h3>{props.name}</h3>
            {itemsElements}
        </div>
    )
}