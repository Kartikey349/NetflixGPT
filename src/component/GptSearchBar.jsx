import { useDispatch, useSelector } from "react-redux"
import { KEY_OPTION, lang } from "../utils/constant"
import Groq from "groq-sdk";
import { useState } from "react";
import {addGptMovies} from "../utils/gptSlice"
import { FormData } from "groq-sdk/src/_shims/registry.js";

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const language = useSelector((store) => store.config.language)
    const [search, setSearch] = useState("")

    const groq = new Groq({ apiKey: import.meta.env.VITE_OPENAPI_KEY,
        dangerouslyAllowBrowser: true
     });

     const searchMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", KEY_OPTION);

        const json = await data.json()
        return json.results;
     }


    const handleClick = async () => {
        const response = await groq.chat.completions.create({
            messages: [
            {
                role: "user",
                content: "Give me the top 5" + search  +", comma separated, example: avengers,ironman,sholay,... like that, just give names not a single other lines like here is result something like that",
            },
            ],
            model: "llama-3.3-70b-versatile",
        });

        const result = (response.choices[0]?.message?.content || "").split(",")

        const promiseArray = result.map((movie) => searchMovies(movie))
        const moviesData = await Promise.all(promiseArray)
        
        dispatch(addGptMovies({moviesName: result, moviesData : moviesData}))
    }

  return (
    <div className='sm:w-3/4 md:w-1/2'>
        <form onSubmit={(e) =>{e.preventDefault()}} className='p-2 rounded-sm bg-black flex gap-2'>
            <input className='bg-white flex-1 rounded-md p-2 ' value={search} onChange={(e) => setSearch(e.target.value)} placeholder={lang[language].placeHolder} type='text' />
            <button className='bg-red-700 p-3 rounded-md text-white'
            onClick={handleClick}
            >{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;