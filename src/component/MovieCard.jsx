import { IMAGE_URL } from "../utils/constant"

const MovieCard = ({poster_path}) => {

  return (
    <div>
        <img className="w-48 rounded-md " src={IMAGE_URL + poster_path} alt='movieLogo'/>
    </div>
  )
}

export default MovieCard