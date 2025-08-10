import { useEffect } from "react"
import { KEY_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import {addMovies} from "../utils/movieSlice"

const useNowPlayingMovies = () => {
     const dispatch = useDispatch()
      const nowPlayingMovies = useSelector((store) => store.movies.movies)

    const fetchNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", KEY_OPTION)

        const json = await data.json()
        dispatch(addMovies(json.results))
    }

    useEffect(() => {
        !nowPlayingMovies && fetchNowPlayingMovies();
    },[])
}


export default useNowPlayingMovies