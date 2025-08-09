import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Primary from './Primary'
import VideoTitle from './VideoTitle'
import usePopularMovies from '../hooks/usePopularMovies';

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.movies)

  useNowPlayingMovies();
  usePopularMovies();
  
  if(!movies) return;

  const mainMovie = movies[0]

  return (
    <div>
        <VideoTitle movie={mainMovie} />
        <Primary movie= {mainMovie} />
    </div>
  )
}

export default MainContainer