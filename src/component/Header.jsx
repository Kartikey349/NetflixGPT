import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { toggleGpt } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector((store) => store.gpt.isOpen)
    const [toggleLogout, setToggleLogout] = useState(false)

    const handleSignout = () => {

        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error")
        });
    }


    useEffect(() => {
           const unsubscribe = onAuthStateChanged(auth, (user) => {
                if(user){
                    const {uid, email, displayName} = user;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName}))
                    navigate("/browse")
                }else{
                    dispatch(removeUser())
                    navigate("/")
                }
            })

            return () => unsubscribe();
        }, [])

    const handleGpt = () => {
        dispatch(toggleGpt())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className="h-18 w-full flex items-center px-3 sm:px-5 absolute bg-gradient-to-b from-black justify-between z-10">
        <img className="h-12" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />


        {user && (<div className="flex items-center gap-2">

            {showGptSearch &&
                (<select className="bg-gray-600 p-1 rounded-md font-semibold" onChange={handleLanguageChange}>
                    <option value={"en"}>English</option>
                    <option value={"hindi"}>Hindi</option>
                    <option value={"spanish"}>Spanish</option>
            </select>)
            }
            <img className="w-12 h-12 cursor-pointer" onClick={handleGpt}  src="https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png" />

            <img className="w-11 h-11 rounded-md relative" onClick={() => {
                setToggleLogout(!toggleLogout)
            }}
            
            src={!toggleLogout ? "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" : "https://i.pinimg.com/originals/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.png"} />

            {toggleLogout && <div className="bg-white absolute top-15 right-4 rounded-md cursor-pointer">
                <button className="text-white bg-gray-600 pl-1 pr-2"
                onClick={handleSignout}
                >Logout</button>
            </div>}
        </div>)}
    </div>
  )
}

export default Header