import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { KEY_OPTION } from "../utils/constant";

const useTrailerVideo = (id) => {
    const dispatch = useDispatch()
    const trailer = useSelector((store) => store.movies.trailer)

    const fetchVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, KEY_OPTION);
    
        const json = await data.json()
        const trailer = json?.results?.filter((m) => m.type = "trailer") || json.results[0]
        dispatch(addTrailer(trailer[0]))
      }
    
      useEffect(() => {
        !trailer && fetchVideo()
      }, [])
}

export default useTrailerVideo;
  