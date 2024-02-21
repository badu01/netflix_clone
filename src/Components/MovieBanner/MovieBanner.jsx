import React, { useContext } from 'react'
import { movieContext } from '../../Constants/Context'
import { backdropimgURL } from '../../Constants/Constants'
import "./MovieBanner.css"
function MovieBanner() {
    const {movie}=useContext(movieContext)
  return (
    <div className='Moviebanner' style={{backgroundImage:movie?`URL(${backdropimgURL+movie.backdrop_path})`:" "}}>
        <div className="shade">
            
        </div>
    </div>
  )
}

export default MovieBanner