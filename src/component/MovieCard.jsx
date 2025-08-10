import { IMAGE_URL } from "../utils/constant"

const MovieCard = ({poster_path}) => {

  if(!poster_path) return null;
  return (
    <div>
        <img className="w-40 rounded-md " src={IMAGE_URL + poster_path} alt='movieLogo'/>
    </div>
  )
}

export default MovieCard