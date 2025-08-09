
const VideoTitle = ({movie}) => {
  return (
    <div className="mt-36 w-1/2 ml-10 absolute text-white bg-gradient-to-r from-black p-4">
      <h1 className="text-6xl">{movie?.title}</h1>
      <h1 className="text-lg mt-4">{movie?.overview}</h1>

      <div className="mt-4">
        <button className="bg-gray-600 px-6 py-2 mr-2 rounded-lg text-white">Play</button>
        <button className="bg-gray-600 px-6 py-2 rounded-lg text-white">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle