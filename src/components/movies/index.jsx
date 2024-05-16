/* eslint-disable react/prop-types */




export default function Movies({movie, handdleRemoveMovie}){



    return(
        <div>
              <h3>{movie.title}</h3>
              <div>
                <p>{movie.synopsis}</p>
                <button onClick={()=> handdleRemoveMovie(movie.id)}>Remover</button>
              </div>
              <iframe width="560" height="315" src={movie.trailler} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
    )
}