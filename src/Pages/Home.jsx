import React from 'react'
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/header';
import RowPost from '../Components/RowPoster/RowPost';
import { NewRelese, popular } from '../Constants/urls';
import { Footer } from '../Components/Footer/Footer';
function Home() {
  return (
    <div> 
    <Header/>
    <Banner/>
    <RowPost title="New Relese" url={NewRelese}/>
    <RowPost title="Popular" url={popular}/>
    <Footer/>
    </div>
  )
}

export default Home