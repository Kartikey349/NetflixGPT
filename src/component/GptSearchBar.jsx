import { useSelector } from "react-redux"
import { lang } from "../utils/constant"

const GptSearchBar = () => {
    
    const language = useSelector((store) => store.config.language)

  return (
    <div className='w-3/4 md:w-1/2'>
        <div className='p-2 rounded-sm bg-black flex gap-2'>
            <input className='bg-white flex-1 rounded-md p-2 ' placeholder={lang[language].placeHolder} type='text' />
            <button className='bg-red-700 p-3 rounded-md text-white'>{lang[language].search}</button>
        </div>
    </div>
  )
}

export default GptSearchBar;