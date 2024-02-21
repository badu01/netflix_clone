import React, { useContext, useEffect, useState } from 'react'
import { API_KEY, backdropimgURL } from '../../Constants/Constants'
import "./MovieContent.css"
import axios from "../../Constants/axios"
import { movieContext } from '../../Constants/Context'
import YouTube from 'react-youtube'

function MovieContent() {
    const {movie}=useContext(movieContext)
    const [geners,setgeners]=useState([])
    const [videoId,setVideoId]=useState()
     const handleTraile=()=>{
            axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}`).then((res)=>{
                setVideoId(res.data.results[0].key)
                
            })
     }
    const opts={
        width:'100%',
        height: '529px',
        playerVars:{
            autoplay:1
        }
     }
    useEffect(()=>{
            axios.get(`/genre/movie/list?api_key=${API_KEY}`).then((Response)=>{
                setgeners(Response.data.genres)
            })
    },[])
  return (
    <div>
    <div className='Moviecontent'>
        <img className='Movie_poster' src={movie? backdropimgURL+movie.poster_path:""} alt="poaster" />
        <div className="Movie_details">
            <h1>
                {movie.title}
            </h1>
            <p>
                {
                    movie.original_language ==="en"?"English":movie.original_language ==="ko"?"Korean":""
                }
            </p>
            <div className="gener_list">
            {
                movie.genre_ids.map((genreId) => {
                            const genre = geners.find((element) => element.id === genreId);
                            return genre ? (
                                <div className="gener" key={genre.id}>
                                    <p>{genre.name}</p>
                                </div>
                            ) : null;
                        })
                    }
            </div>
               <p style={{marginTop:'10px'}}>
                {
                    movie.overview
                }
                </p> 
            <div className='MovieButtons'>
                    <button onClick={handleTraile} className='MovieButton'>Watch Trailer</button>
                    <button className='MovieButton'>Add to MyList</button>
            </div>
        </div>
    </div>
        {
        videoId && <YouTube className='trailer' videoId={videoId} opts={opts}></YouTube>
        }
    </div>
  )
}

export default MovieContent