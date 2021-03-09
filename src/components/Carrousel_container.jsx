import React from 'react'
import '../assets/styles/components/Carrousel_container.scss'

const Carrousel_container = ({children}) =>{
    return (
        <article className="Carrousel__container">
            {children}
        </article>
    )
}

export default Carrousel_container