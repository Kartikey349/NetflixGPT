
const VideoTitle = ({movie}) => {
  return (
    <div className=" pt-45 sm:pt-50 pl-10 sm:pl-14 w-full aspect-video absolute text-white bg-gradient-to-r from-black h-screen">
      <h1 className="text-3xl sm:text-5xl font-semibold w-2/4 lg:w-1/4 ">{movie?.title}</h1>
      <h1 className="text-md sm:text-lg mt-4 line-clamp-4 w-2/4 lg:w-1/4 ">{movie?.overview}</h1>

      <div className="mt-4">
        <button className="bg-white px-3 sm:px-6 py-2 mr-2 rounded-lg text-black">Play</button>
        <button className="bg-gray-500/40 px-3 sm:px-6 py-2 rounded-lg text-white">ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle