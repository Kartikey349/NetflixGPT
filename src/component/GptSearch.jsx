import GptSearchBar from "./GptSearchBar"
import GptMoviesSuggestion from "./GptMoviesSuggestion";

const GptSearch = () => {


  return (
    <div className="w-full h-screen flex items-center pt-40 flex-col gap-4 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg')]">
        <GptSearchBar />
        <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearch;