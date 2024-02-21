import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../../Constants/axios"
import { API_KEY, backdropimgURL } from '../../Constants/Constants';
function Banner() {
    const [movie,setMovie]=useState([])
    const [currentIndex,setCurrentIndex]=useState(0)
    useEffect(() => {
        axios.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then((respons)=>{
            //console.log(respons.data.results[0].original_title);
            setMovie(respons.data.results)
        })
    }, []);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentIndex((prevind)=>(prevind+1)%20);
        },5000)
        return ()=> clearInterval(interval)
    },[])
    const currentMovie=movie[currentIndex]
    console.log(currentMovie);
  return (
      <div className='banner' 
      style={{backgroundImage:`URL(${currentMovie? backdropimgURL+currentMovie.backdrop_path :" "})`}}>
        <div className='gradient'>
        <div className="content">
            <div className="title">
                <h1>{currentMovie? currentMovie.title:""}</h1>
            </div>
            <div className="buttons">
                <button>Play</button>
                <button>My list</button>
            </div>
            <div className="description">
                <p>
                {currentMovie?currentMovie.overview:""}
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner

