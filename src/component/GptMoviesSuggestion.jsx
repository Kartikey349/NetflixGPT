import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GptMoviesSuggestion = () => {

    
  const gpt = useSelector((store) => store.gpt)
  const {gptMoviesData, moviesName} = gpt
  if(!moviesName) return null;

  return (
    <div className='bg-black/80 rounded-lg p-4 m-4 text-white'>
        <div>
            {moviesName.map((movieName, index) => <MoviesList key={movieName} title={movieName} movies={gptMoviesData[index]} /> )}
        </div>
    </div>
  )
}

export default GptMoviesSuggestion