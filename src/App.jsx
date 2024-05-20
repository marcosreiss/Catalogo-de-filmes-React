import { useState } from 'react'
import './App.css'
import Movies from './components/movies'
import CreateMovie from './components/movies/createMovie'
import Header from './components/header'

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
    let array = trailler.split('/')
    let link;
    if(array[2] !== 'youtu.be'){
      array = trailler.split('=')
      if(array.length > 2) {
        array.pop()
        array[array.length - 1] = array[array.length - 1].slice(0, -3)
      }
      console.log(array)
    }
     link = linkBase + array[array.length - 1]


    const newMovie = {
      id: id,
      title: title,
      synopsis: synopsis,
      trailler: link
    }
    setMovies( state=> {
      const newState =[newMovie, ...state]
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

      <Header setShowCreateMovie={setShowCreateMovie} />

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
                            
      <div className="main">
        {movies.map(movie=>(
          <Movies key={movie.id} 
              movie={movie} 
              handdleRemoveMovie={handdleRemoveMovie}
              handdleEditMovie={handdleEditMovie}
          />
        ))}
      </div>
      
    </div>
  )
}


