import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => {
    return(
        <section className="Search">
            <h2 className="Search__title">Find what you need</h2>
            <input className="Search__input" type="search" placeholder="Buscar"/>
            <section className="Buttons">
                <button className="Search--find">Search</button>
                <button className="Search--surprise">Surprise</button>
            </section>
        </section>
    )
}

export default Search