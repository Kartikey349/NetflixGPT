import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useMovieTrailer";

const Primary = ({movie}) => {
  const trailerMovie = useSelector((store) => store.movies?.trailer)

  const id = movie?.id;

  useTrailerVideo(id);


  if(!trailerMovie) return;
  const {key} = trailerMovie;

  return (
    <div className="top-0">
      <iframe className="w-full h-screen" src={"https://www.youtube.com/embed/" + key + "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1"}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default Primary