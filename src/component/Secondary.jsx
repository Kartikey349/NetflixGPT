import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

const Secondary = () => {
  const movies = useSelector((store) => store.movies)
  const popularMovies = useSelector((store) => store.movies)

  if(!movies) return;

  return (
    <div className="bg-black pl-6">
      <div className="relative -mt-64 sm:-mt-48">
        <MoviesList title={"Now Playing"} movies={movies?.movies} />
        <MoviesList title={"Popular"} movies={movies?.popularMovies} />
        <MoviesList title={"Now Playing"} movies={movies?.movies} />
      </div>
    </div>
  )
}

export default Secondary