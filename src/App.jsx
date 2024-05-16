import { useState } from 'react'
import './App.css'

export default function App() {
  const [movies, setMovies] = useState(()=> {
    const storedMovies = localStorage.getItem('movies-data')
    if(!storedMovies) return []
    return JSON.parse(storedMovies)
  })

  const [id, setId] = useState(()=>{
    const storedId = localStorage.getItem('id-controll')
    if(!storedId) return 1
    return parseInt(storedId)
  })
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
    setMovies( state=> {
      const newState =[...state, newMovie]
      localStorage.setItem("movies-data", JSON.stringify(newState));
      return newState
    })

    setTitle("")
    setSynopsis("")
    setTrailler("") 
    setId(state=> {
      const newId = state+1
      localStorage.setItem('id-controll', newId)
      return newId
    })
  }

  const handdleRemoveMovie = function(id){
    setMovies(state=> {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem('movies-data', JSON.stringify(newState))
      return newState
    })
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
              <h1>{movie.id}</h1>
              <div>
                <p>{movie.synopsis}</p>
                <button onClick={()=> handdleRemoveMovie(movie.id)}>Remover</button>
              </div>
              <iframe width="560" height="315" src={movie.trailler} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      
    </div>
  )
}


