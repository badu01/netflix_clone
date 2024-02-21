import React, { useContext, useEffect } from 'react'
import { movieContext } from '../Constants/Context'
import Header from '../Components/Header/header';
import MovieBanner from '../Components/MovieBanner/MovieBanner';
import MovieContent from '../Components/MovieContent/MovieContent';

function Movie() {
const {movie}=useContext(movieContext);
 
 useEffect(()=>{
  console.log(movie);
 })
  return (
    <div>
        <Header/>
        <MovieBanner/>
        <MovieContent/>
    </div>
  )
}

export default Movie