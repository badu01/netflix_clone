import { createContext,useState} from "react";

export const movieContext=createContext();

export default function MovieDetails({children}){
        const [movie, setmovie] = useState()
    return(
        <movieContext.Provider value={{movie,setmovie}}>
            {children}
        </movieContext.Provider>
    )
}
