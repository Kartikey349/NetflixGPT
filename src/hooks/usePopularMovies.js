import { useEffect } from "react"
import { KEY_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import {addPopularMovies} from "../utils/movieSlice"

const usePopularMovies = () => {
     const dispatch = useDispatch()
      const popularMovies = useSelector((store) => store.movies.popularMovies)

    const fetchPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", KEY_OPTION)

        const json = await data.json()
        dispatch(addPopularMovies(json.results))
        
    }

    useEffect(() => {
        !popularMovies && fetchPopularMovies();
    },[])
}


export default usePopularMovies