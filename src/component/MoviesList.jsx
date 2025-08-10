import MovieCard from './MovieCard'

const MoviesList = ({title, movies}) => {

  return (
    <div className='flex flex-col sm:pl-6'>
        <h1 className='text-xl font-semibold sm:text-3xl py-2 mt-2 text-white mb-2'>{title}</h1>
        <div className='flex overflow-x-scroll gap-6 hide-scrollbar'>
            {movies && movies.map((movie) => <div className='flex-shrink-0' key={movie.id} >
                <MovieCard poster_path={movie?.poster_path} /> </div> )}
        </div>
    </div>
  )
}

export default MoviesList