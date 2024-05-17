/* eslint-disable react/prop-types */
import './style.css'

export default function Header({setShowCreateMovie}){



    return(
        <div id="header">
            <h1>Catálogo de Filmes</h1>
            <button className='button' onClick={()=> setShowCreateMovie(state=> !state)} >
                Novo Filme
            </button>
        </div>
    )
}