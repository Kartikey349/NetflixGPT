import { useSelector } from "react-redux"
import Header from "./Header"
import MainContainer from "./MainContainer"
import Secondary from "./Secondary"
import GptSearch from "./GptSearch"

const Browse = () => {

  const toggleGpt = useSelector((store) => store.gpt.isOpen)

  return (
    <div>
        <Header />
        {toggleGpt ? <GptSearch /> :
        <div>
          <MainContainer />
          <Secondary />
        </div>
        }
    </div>
  )
}

export default Browse