import React from 'react'
import '../assets/styles/components/Carrousel.scss'

const Carrousel = ({ title, children }) => {
    return(
        <section className="Carrousel">
            <h3 className="Carrousel__title">{title}</h3>
            {children}
        </section>
    )
}

export default Carrousel