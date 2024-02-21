import axios from "../../Constants/axios"
import "./RowPost.css"
import React, { useContext, useEffect,useState } from 'react'
import { API_KEY, backdropimgURL} from "../../Constants/Constants"
import YouTube from "react-youtube"
import {useNavigate} from 'react-router-dom'
import { movieContext } from "../../Constants/Context"

function RowPost(props) {
    const [posts, setPosts] =useState([]);
    const [utlId, setutlId] = useState();
    const [view, setview] = useState(false);
    const {setmovie}=useContext(movieContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(props.url).then((Response)=>{
                setPosts(Response.data.results);
        })
    })
    const handleClick = (id,obj)=>{

        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
            navigate('/Movie')
            setutlId(response.data.results[0].key)
            setview(!view)
            setmovie(obj)
           // console.log(response.data)
        })
    }
    const opts={
        width:'100%',
        playerVars: {
            autoplay: 1,
          },
    }
  return (
    <div className="rowpost">
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <div className="posters">
            {
                posts.map((obj,index)=>{
                    return(
                    <div className="poster">
                    <img onClick={()=>handleClick(obj.id,obj)} className="posterimg" src={obj ? backdropimgURL+obj.poster_path:" "} alt="poster" />
                    <p style={{maxWidth:200}}>{obj ? obj.title:" "}</p>
                    </div>
                    
                    )
                })
                
            }
        </div>
        
        { 
        view && utlId && <YouTube videoId={utlId} opts={opts}/>
        }
    </div>
  )
}

export default RowPost