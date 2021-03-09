import React from 'react'
import '../assets/styles/components/Item.scss'

const Item = ({ title, year, contentRating, duration}) =>{
    return(
        <div className="Carrousel_item">
            <h4>{title}</h4>
            <h4>{year}</h4>
            <h4>{duration}</h4>
            <h4>{contentRating}</h4>
        </div>
    )
}

export default Item