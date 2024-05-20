/* eslint-disable react/prop-types */

import './style-movies.css'



export default function CreateMovie({handdleAddMovie, title, setTitle, synopsis, setSynopsis, trailler, setTrailler, setShowCreateMovie}){

  const synopsisExemple = 'Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury...'

    return(
      <form className='form' onSubmit={handdleAddMovie} >
        
        <h1>Adicionar Filme</h1>

        <button onClick={()=> setShowCreateMovie(state=> !state)} id='close-form'>X</button>

        <div className="fields">
          <label htmlFor="title">Título da produção:</label>
          <input required type="text" id="title" value={title} 
            placeholder='Homem Aranha de Volta ao Lar'
            onChange={ev=> setTitle(ev.target.value)}  
          />
        </div>

        <div className="fields">
          <label htmlFor="synopsis">Sinopse:</label>
          <textarea required id="synopsis" rows={5} cols={50} value={synopsis}
            placeholder={synopsisExemple}
            onChange={ev=> setSynopsis(ev.target.value)}
          ></textarea>
        </div>

        <div className="fields">
          <label htmlFor="trailler">Link do Trailler:</label>
          <input required type="text" id="trailler" value={trailler}
            onChange={ev=> setTrailler(ev.target.value)}
            placeholder='https://youtu.be/VfTl8e6hwws?si=pHOV2CWnAJ0fVc5d'
          />
        </div>

        <button type='submit'>Adicionar</button>
        
      </form>
    )
}