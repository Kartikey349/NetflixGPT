import { useEffect } from "react"
import { KEY_OPTION } from "../utils/constant"
import { useDispatch } from "react-redux"
import {addPopularMovies} from "../utils/movieSlice"

const usePopularMovies = () => {
     const dispatch = useDispatch()

    const fetchPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", KEY_OPTION)

        const json = await data.json()
        dispatch(addPopularMovies(json.results))
        
        console.log(json)
    }

    useEffect(() => {
        fetchPopularMovies();
    },[])
}


export default usePopularMovies