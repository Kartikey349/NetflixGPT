import { useRef, useState } from "react";
import Header from "./Header";
import validateCredentials from "../utils/validate";

const Login = () => {

    const [isSignin, setIsSignin] = useState(true)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [error, setError] = useState('')

    const handleButtonClick = () => {
        const res = validateCredentials(email.current.value, password.current.value)
        setError(res)
    }

    return <div className= "h-screen bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg')]">

        <div className="bg-black/30 h-full">
    
        <Header />
            <div className="relative flex items-center justify-center h-full">
            <form className="bg-black/60  w-80 p-8 flex flex-col gap-4 rounded-md"
            onSubmit={(e) => {
                e.preventDefault()
            }}
            >

                <h1 className="text-white text-2xl font-bold">{isSignin ? "Sign In" : "Sign Up"}</h1>

                {!isSignin && (<input
                className="p-3 bg-gray-800 bg-opacity-100 text-white text-sm rounded outline-none"
                placeholder="Full Name"
                type="text"
                ref={name}
                />)
                }

                <input
                className="p-3 bg-gray-800 bg-opacity-100 text-white text-sm rounded outline-none"
                placeholder="Email Address"
                ref={email}
                type="text"
                />
                <input
                className="p-3 bg-gray-800 bg-opacity-100 text-white text-sm rounded outline-none"
                placeholder="Password"
                type="password"
                ref={password}
                />

                <p className="text-red-600 font-bold">{error && error}</p>

                <button className="p-3 bg-red-600 hover:bg-red-700 text-white rounded" 
                onClick={handleButtonClick}
                >
                {isSignin ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-gray-400 text-xs">
                {isSignin ? "New to Netflix? " : "Already Have Account? " }<span className="text-white cursor-pointer hover:underline"
                onClick={() =>{
                    setIsSignin(!isSignin)
                }}
                >{isSignin ? "Sign up now": "Sign In Now"}</span>.
                </p>
            </form>
            </div>

        </div>
    </div>
}

export default Login;