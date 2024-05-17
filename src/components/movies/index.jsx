/* eslint-disable react/prop-types */

import './style-movies.css'


export default function Movies({movie, handdleRemoveMovie, handdleEditMovie}){



    return(
        <div className='movie'>
          <details className='movie-button'> {/*tres pontinhos*/}
            <summary><i className="fa-solid fa-ellipsis-vertical"></i></summary>
            
            <button onClick={()=> handdleRemoveMovie(movie.id)}>Remover</button>
            <button onClick={()=> handdleEditMovie(movie.id)}>Editar</button>
          </details>

          <h3>{movie.title}</h3>
          <p>{movie.synopsis}</p>
          <iframe src={movie.trailler} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}