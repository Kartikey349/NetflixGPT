import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { KEY_OPTION } from "../utils/constant";

const useTrailerVideo = (id) => {
    const dispatch = useDispatch()

    const fetchVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, KEY_OPTION);
    
        const json = await data.json()
        const trailer = json?.results?.filter((m) => m.type = "trailer") || json.results[0]
        dispatch(addTrailer(trailer[0]))
      }
    
      useEffect(() => {
        fetchVideo()
      }, [])
}

export default useTrailerVideo;
  