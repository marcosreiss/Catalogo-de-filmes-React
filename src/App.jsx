import { useState } from 'react'
import './App.css'
import Movies from './components/movies'
import CreateMovie from './components/movies/createMovie'

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

  const [showCreateMovie, setShowCreateMovie] = useState(false);


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
    setShowCreateMovie(state=> !state)
  }

  const handdleRemoveMovie = function(id){
    setMovies(state=> {
      const newState = state.filter(movie => movie.id !== id)
      localStorage.setItem('movies-data', JSON.stringify(newState))
      return newState
    })
  }

  const handdleEditMovie = function(/*id*/){

    // const movieToEdit = movies.filter(movie => movie.id === id )[0]
    console.log(movies);

  }


  return (
    <div  id="app">

      <button className='button' onClick={()=> setShowCreateMovie(state=> !state)} >
        Novo Filme
      </button>

      {showCreateMovie && (
        <>
          <div className="overlay"></div>
          <CreateMovie 
            title={title} setTitle={setTitle}
            synopsis={synopsis} setSynopsis={setSynopsis}
            trailler={trailler} setTrailler={setTrailler}
            handdleAddMovie={handdleAddMovie} 
            setShowCreateMovie={setShowCreateMovie}
          />
        </>
      )}
      

                            
        {movies.map(movie=>(
          <Movies key={movie.id} 
              movie={movie} 
              handdleRemoveMovie={handdleRemoveMovie}
              handdleEditMovie={handdleEditMovie}
          />
        ))}
      
    </div>
  )
}


