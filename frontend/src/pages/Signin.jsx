import { Link } from "react-router-dom"
const Signin = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-600 relative">
            <div className="w-[40%] bg-white mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg">
                <h1 className="text-2xl font-bold text-center my-4">Sign In</h1>
                <p className="text-center text-md text-gray-600">Enter your credentials to access your account</p>
                <form className="mx-[2rem] my-[1rem]">
                    
                    <label className="text-md font-semibold ">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full border-2 py-2 px-4 rounded-md outline-none block mt-2 mb-4" required />
                    
                    <label className="text-md font-semibold ">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full border-2 py-2 px-4 rounded-md outline-none block mt-2 mb-4" required />
                    
                    <button type="submit" className="py-4 px-4 text-center w-full bg-black rounded-md text-white text-md font-bold ">Sign In</button>

                </form>
                <p className="text-center text-md text-gray-600 pb-4">Don't have an account? <Link to='/signup' className="hover:underline">Sign up</Link></p>
            </div>
            
        </div>
  )
}

export default Signin