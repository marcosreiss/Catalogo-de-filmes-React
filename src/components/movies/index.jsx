/* eslint-disable react/prop-types */

import { useState } from 'react'
import './style-movies.css'


export default function Movies({movie, handdleRemoveMovie, handdleEditMovie}){
  const [showDropdown, setShowDropdown] = useState(false);
  const trueDropdown = () => setShowDropdown(true);
  const falseDropdown = () => setShowDropdown(false);

  return(
    <div className='movie'>

     <div className='dropdown-area' onMouseLeave={falseDropdown}>
      <button className='dropdown-button' onMouseEnter={trueDropdown} >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
          
          {showDropdown && (
            <div className='dropdown' onMouseLeave={falseDropdown}>
            <button onClick={()=> handdleRemoveMovie(movie.id)}>Remover</button>
            <button onClick={()=> handdleEditMovie(movie.id)}>Editar</button>
          </div>
          )}
     </div>


      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <iframe src={movie.trailler} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}