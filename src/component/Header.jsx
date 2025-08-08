import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)

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

  return (
    <div className="h-18 w-full flex items-center px-5 absolute bg-gradient-to-b from-black justify-between">
        <img className="h-12" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />


        {user && (<div className="flex items-center gap-2">
            <img className="w-12 h-12 rounded-md" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
            <p onClick={handleSignout} className="font-bold text-white">(SignOut)</p>
        </div>)}
    </div>
  )
}

export default Header