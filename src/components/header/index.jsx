/* eslint-disable react/prop-types */
import './style.css'

export default function Header({setShowCreateMovie}){



    return(
        <div id="header">
            <h1>Catálogo de Filmes</h1>
            <div>
                <button className='button' onClick={()=> setShowCreateMovie(state=> !state)} style={{marginRight: '5px'}} >
                    Adicionar Filme
                </button>
                
                <button className="button" onClick={()=> localStorage.clear()}>
                    Limpar cache
                </button>
            </div>
        </div>
    )
}