/* eslint-disable react/prop-types */



export default function CreateMovie({handdleAddMovie, title, setTitle, synopsis, setSynopsis, trailler, setTrailler}){


    return(
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
    )
}