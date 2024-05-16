import { useState } from 'react'
import './App.css'

export default function App() {
  const [movies, setMovies] = useState([])
  const [id, setId] = useState(1)
  const [title, setTitle] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [trailler, setTrailler] = useState('') //link do trailler


  const handdleAddMovie = function(event){
    event.preventDefault();

    const linkBase = 'https://www.youtube.com/embed/';
    const array = trailler.split('/')
    const link = linkBase + array[array.length - 1]


    const newMovie = {
      id: id,
      title: title,
      synopsis: synopsis,
      trailler: link
    }
    setMovies( state=> [...state, newMovie])

    setTitle("")
    setSynopsis("")
    setTrailler("") 
    setId(state=> state+1)
  }



  return (
    <div  id="app">
      <form onSubmit={handdleAddMovie} >
        <div className="fields">
          <label htmlFor="title">Título da produção:</label>
          <input type="text" id="title" value={title}
            onChange={ev=> setTitle(ev.target.value)}  
          />
        </div>

        <div className="fields">
          <label htmlFor="synopsis">Sinopse:</label>
          <textarea id="synopsis" rows={5} cols={50} value={synopsis}
            onChange={ev=> setSynopsis(ev.target.value)}
          ></textarea>
        </div>

        <div className="fields">
          <label htmlFor="trailler">Link do Trailler:</label>
          <input type="text" id="trailler" value={trailler}
            onChange={ev=> setTrailler(ev.target.value)}
          />
        </div>

        <button type='submit'>Adicionar</button>
        
      </form>

      <div className="content">                      
        {movies.map(movie=>(
          <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.synopsis}</p>
              <iframe width="560" height="315" src={movie.trailler} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <p>{movie.trailler}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}


