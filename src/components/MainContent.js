import React from "react"
import Category from './Category'
import itemData from "./ItemData"

export default function MainContent() {
    const allCategories = itemData.map(a => a.category) 
    const uniqueCategories = [...new Set(allCategories)];
    const categories = uniqueCategories.map((category, index) => <Category name={category}  key={index}/>)
    return(
        <div className="main">
            <div className="menu">
                {categories}      
            </div>
        </div>
    )        
}